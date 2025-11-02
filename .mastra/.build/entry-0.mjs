import { Mastra } from '@mastra/core/mastra';
import { Agent } from '@mastra/core/agent';
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const getExplainedQuoteByTopic = createTool({
  id: "getExplainedQuoteByTopic",
  description: "Takes a user's request (e.g., 'a verse about hope'), finds a relevant verse, and explains it.",
  // The input from Telex will be a simple string.
  inputSchema: z.string().describe("The user's full request, e.g., 'a verse about hope'"),
  outputSchema: z.object({
    // The output needs to be a JSON object with a 'text' field for Telex to display.
    text: z.string()
  }),
  // The function receives the raw string from Telex.
  execute: async (context) => {
    const userMessage = context.context || "";
    let topic = "";
    const parts = userMessage.toLowerCase().split("about ");
    if (parts.length > 1) {
      topic = parts[1].trim();
    }
    if (!topic) {
      return { text: "Please ask for a verse with a topic, like 'a verse about hope'." };
    }
    const topicMap = {
      strength: "Philippians 4:13",
      hope: "Jeremiah 29:11",
      love: "1 Corinthians 13:4-7",
      peace: "John 14:27",
      faith: "Hebrews 11:1",
      forgiveness: "Ephesians 4:32",
      comfort: "2 Corinthians 1:3-4"
    };
    const verseRef = topicMap[topic];
    if (!verseRef) {
      return { text: `Sorry, I don't have a verse for "${topic}". Try 'strength' or 'hope'.` };
    }
    try {
      const quoteResponse = await fetch(`https://bible-api.com/${encodeURIComponent(verseRef)}`);
      if (!quoteResponse.ok) throw new Error(`Bible API failed.`);
      const quoteData = await quoteResponse.json();
      const verse = quoteData.reference;
      const text = quoteData.text.trim();
      const key = process.env.OPENROUTER_API_KEY;
      if (!key) return { text: `Verse: ${verse}
${text}

(Explanation unavailable: API key not configured.)` };
      const prompt = `Explain this Bible verse briefly (1-3 sentences) in an uplifting way:

Verse: ${verse}
Text: "${text}"`;
      const llmResponse = await fetch(OPENROUTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
        body: JSON.stringify({ model: "gpt-4o-mini", messages: [{ role: "user", content: prompt }] })
      });
      if (!llmResponse.ok) throw new Error(`LLM provider failed.`);
      const llmData = await llmResponse.json();
      const explanation = llmData?.choices?.[0]?.message?.content?.trim() || "No explanation was generated.";
      const finalText = `Here is a verse about **${topic}**:

**${verse}**
*${text}*

**Meaning:**
${explanation}`;
      return { text: finalText };
    } catch (error) {
      console.error("Agent Error:", error.message);
      return { text: "Sorry, an error occurred while processing your request." };
    }
  }
});
const explainedQuoteAgent = new Agent({
  id: "explainedQuoteAgent",
  name: "Explained Quote Agent",
  instructions: "A helpful AI agent that takes a topic from a user, finds a relevant Bible verse, and provides an explanation.",
  model: {
    providerId: "openrouter",
    modelId: "gpt-4o-mini",
    apiKey: process.env.OPENROUTER_API_KEY
  },
  tools: { getExplainedQuoteByTopic }
});

const mastra = new Mastra({
  // minimal config; add provider/env as needed
  agents: {
    explainedQuoteAgent
  }
});

export { mastra };
