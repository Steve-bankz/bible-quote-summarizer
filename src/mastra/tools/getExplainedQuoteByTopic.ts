import { createTool } from "@mastra/core/tools";
import { z } from "zod";
// import "dotenv/config";

const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";


// Map topics to Bible verses
function topicMatch(topic:string) {
const topicMap: Record<string, string> = {
  strength: "Philippians 4:13",
  hope: "Jeremiah 29:11",
  love: "1 Corinthians 13:4-7",
  peace: "John 14:27",
  faith: "Hebrews 11:1",
  forgiveness: "Ephesians 4:32",
};
return topicMap[topic] || "Unknown"
}

export const getExplainedQuoteByTopic = createTool({
  id: "getExplainedQuoteByTopic",
  description: "Fetches a Bible verse based on topic and returns an explanation.",
    inputSchema: z.object({
  userTopic: z.string().describe("Bible verse"),
}),
  outputSchema: z.object({ text: z.string() }),
  execute: async ({context}) => {
    const topic = `${context.userTopic}`

    // const verseRef = topicMatch(topic);
    //  if (verseRef == `unknown`) {
    //   return { text: `Sorry, no verse found for "${topic || ''}".` };
    // }

    // Fetch the verse from Bible API
    const verseResponse = await fetch(`https://bible-api.com/${encodeURIComponent(topic)}`);
    if (!verseResponse.ok) {
      return { text: `Failed to fetch verse for "${topic}".` };
    }
    const verseData = await verseResponse.json();
    const verseText = verseData.text?.trim() || "";
    const reference = verseData.reference || topic;

    // Generate explanation using LLM
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return { text: `Verse: ${reference}\n${verseText}\n(Explanation unavailable — missing API key)` };
    }

    const prompt = `Explain this Bible verse briefly (1–3 sentences) in an uplifting way:\n\nVerse: ${reference}\nText: "${verseText}"`;
    const llmResponse = await fetch(OPENROUTER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const llmData = await llmResponse.json();
    const explanation = llmData?.choices?.[0]?.message?.content?.trim() || "No explanation available.";

    return {
      text: `**${reference}**\n*${verseText}*\n\n**Meaning:**\n${explanation}`,
    };
  },
});
