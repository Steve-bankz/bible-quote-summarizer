import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import { Agent } from '@mastra/core/agent';
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import { registerApiRoute } from '@mastra/core/server';
import { randomUUID } from 'crypto';

const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const withTimeout = (promise, ms = 8e3) => Promise.race([
  promise,
  new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms))
]);
const inputSchema = z.object({
  topic: z.string().describe("The user's topic, e.g., 'hope', 'love', 'faith'")
});
const getExplainedQuoteByTopic = createTool({
  id: "getExplainedQuoteByTopic",
  description: "Finds a relevant Bible verse and explains it.",
  inputSchema,
  outputSchema: z.object({ text: z.string() }),
  execute: async (context) => {
    const topic = context.args.topic?.toLowerCase()?.trim();
    console.log("\u{1F50D} User input:", context.args);
    console.log("\u{1F50D} Extracted topic:", topic);
    if (!topic) {
      return {
        text: "Please ask for a verse with a topic, like 'a verse about hope'."
      };
    }
    const topicMap = {
      strength: "Philippians 4:13",
      hope: "Jeremiah 29:11",
      love: "1 Corinthians 13:4-7",
      peace: "John 14:27",
      faith: "Hebrews 11:1",
      forgiveness: "Ephesians 4:32"
    };
    const verseRef = topicMap[topic];
    if (!verseRef) return { text: `Sorry, no verse found for "${topic}".` };
    try {
      const quoteResponse = await withTimeout(
        fetch(`https://bible-api.com/${encodeURIComponent(verseRef)}`)
      );
      if (!quoteResponse.ok) throw new Error("Bible API failed");
      const quoteData = await quoteResponse.json();
      const verse = quoteData.reference;
      const text = quoteData.text.trim();
      const key = process.env.OPENROUTER_API_KEY;
      if (!key)
        return {
          text: `Verse: ${verse}
${text}
(Explanation unavailable \u2014 missing API key)`
        };
      const prompt = `Explain this verse briefly (1\u20133 sentences) in an uplifting way:

Verse: ${verse}
Text: "${text}"`;
      const llmResponse = await withTimeout(
        fetch(OPENROUTER_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }]
          })
        })
      );
      if (!llmResponse.ok) throw new Error("LLM provider failed");
      const llmData = await llmResponse.json();
      const explanation = llmData?.choices?.[0]?.message?.content?.trim() || "No explanation generated.";
      const finalText = `Here's a verse about **${topic}**:

**${verse}**
*${text}*

**Meaning:**
${explanation}`;
      return { text: finalText };
    } catch (error) {
      console.error("\u274C Error:", error.message);
      return { text: "Sorry, an error occurred while processing your request." };
    }
  }
});

const explainedQuoteAgent = new Agent({
  id: "explainedQuoteAgent",
  name: "Explained Quote Agent",
  instructions: "Takes a topic and returns a Bible verse with explanation.",
  model: {
    providerId: "openrouter",
    modelId: "gpt-4o-mini",
    apiKey: process.env.OPENROUTER_API_KEY
  },
  tools: { getExplainedQuoteByTopic }
});

const a2aAgentRoute = registerApiRoute("/a2a/agent/:agentId", {
  method: "POST",
  handler: async (c) => {
    try {
      const mastra = c.get("mastra");
      const agentId = c.req.param("agentId");
      const body = await c.req.json();
      const { jsonrpc, id: requestId, params } = body;
      if (jsonrpc !== "2.0" || !requestId) {
        return c.json({
          jsonrpc: "2.0",
          id: requestId || null,
          error: {
            code: -32600,
            message: 'Invalid Request: jsonrpc must be "2.0" and id is required'
          }
        }, 400);
      }
      const agent = mastra.getAgent(agentId);
      if (!agent) {
        return c.json({
          jsonrpc: "2.0",
          id: requestId,
          error: {
            code: -32602,
            message: `Agent '${agentId}' not found`
          }
        }, 404);
      }
      const { message, messages, contextId, taskId} = params || {};
      let messagesList = [];
      if (message) {
        messagesList = [message];
      } else if (messages && Array.isArray(messages)) {
        messagesList = messages;
      }
      const mastraMessages = messagesList.map((msg) => ({
        role: msg.role,
        content: msg.parts?.map((part) => {
          if (part.kind === "text") return part.text;
          if (part.kind === "data") return JSON.stringify(part.data);
          return "";
        }).join("\n") || ""
      }));
      const response = await agent.generate(mastraMessages);
      const agentText = response.text || "";
      const artifacts = [
        {
          artifactId: randomUUID(),
          name: `${agentId}Response`,
          parts: [{ kind: "text", text: agentText }]
        }
      ];
      if (response.toolResults && response.toolResults.length > 0) {
        artifacts.push({
          artifactId: randomUUID(),
          name: "ToolResults",
          //@ts-ignore
          parts: response.toolResults.map((result) => ({
            kind: "data",
            data: result
          }))
        });
      }
      const history = [
        ...messagesList.map((msg) => ({
          kind: "message",
          role: msg.role,
          parts: msg.parts,
          messageId: msg.messageId || randomUUID(),
          taskId: msg.taskId || taskId || randomUUID()
        })),
        {
          kind: "message",
          role: "agent",
          parts: [{ kind: "text", text: agentText }],
          messageId: randomUUID(),
          taskId: taskId || randomUUID()
        }
      ];
      return c.json({
        jsonrpc: "2.0",
        id: requestId,
        result: {
          id: taskId || randomUUID(),
          contextId: contextId || randomUUID(),
          status: {
            state: "completed",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            message: {
              messageId: randomUUID(),
              role: "agent",
              parts: [{ kind: "text", text: agentText }],
              kind: "message"
            }
          },
          artifacts,
          history,
          kind: "task"
        }
      });
    } catch (error) {
      return c.json({
        jsonrpc: "2.0",
        id: null,
        error: {
          code: -32603,
          message: "Internal error",
          data: { details: error }
        }
      }, 500);
    }
  }
});

const mastra = new Mastra({
  agents: {
    explainedQuoteAgent
  },
  storage: new LibSQLStore({
    url: ":memory:"
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "debug"
  }),
  observability: {
    default: {
      enabled: true
    }
  },
  server: {
    build: {
      openAPIDocs: true,
      swaggerUI: true
    },
    apiRoutes: [a2aAgentRoute]
  }
});

export { mastra };
