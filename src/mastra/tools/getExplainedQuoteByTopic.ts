import { createTool, ToolExecutionContext } from "@mastra/core/tools";
import { z } from "zod";

const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";

// Optional timeout helper
const withTimeout = (promise: Promise<any>, ms = 8000) =>
  Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms)),
  ]);

// Explicit interface for our tool's context
interface TopicContext {
  args: { topic: string };
}

const inputSchema = z.object({
  topic: z.string().describe("The user's topic, e.g., 'hope', 'love', 'faith'"),
});

export const getExplainedQuoteByTopic = createTool({
  id: "getExplainedQuoteByTopic",
  description: "Finds a relevant Bible verse and explains it.",
  inputSchema,
  outputSchema: z.object({ text: z.string() }),
  execute: async (context: ToolExecutionContext<typeof inputSchema> & TopicContext) => {
    // ✅ Access topic safely
    const topic = context.args.topic?.toLowerCase()?.trim();
    console.log("🔍 User input:", context.args);
    console.log("🔍 Extracted topic:", topic);

    if (!topic) {
      return {
        text: "Please ask for a verse with a topic, like 'a verse about hope'.",
      };
    }

    const topicMap: Record<string, string> = {
      strength: "Philippians 4:13",
      hope: "Jeremiah 29:11",
      love: "1 Corinthians 13:4-7",
      peace: "John 14:27",
      faith: "Hebrews 11:1",
      forgiveness: "Ephesians 4:32",
    };

    const verseRef = topicMap[topic];
    if (!verseRef) return { text: `Sorry, no verse found for "${topic}".` };

    try {
      // 🕊️ Fetch Bible verse
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
          text: `Verse: ${verse}\n${text}\n(Explanation unavailable — missing API key)`,
        };

      // 🧠 Generate explanation from LLM
      const prompt = `Explain this verse briefly (1–3 sentences) in an uplifting way:\n\nVerse: ${verse}\nText: "${text}"`;

      const llmResponse = await withTimeout(
        fetch(OPENROUTER_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
          }),
        })
      );

      if (!llmResponse.ok) throw new Error("LLM provider failed");
      const llmData = await llmResponse.json();
      const explanation =
        llmData?.choices?.[0]?.message?.content?.trim() || "No explanation generated.";

      const finalText = `Here's a verse about **${topic}**:\n\n**${verse}**\n*${text}*\n\n**Meaning:**\n${explanation}`;
      return { text: finalText };
    } catch (error: any) {
      console.error("❌ Error:", error.message);
      return { text: "Sorry, an error occurred while processing your request." };
    }
  },
});
