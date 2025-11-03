import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const getExplainedQuoteByTopic = createTool({
  id: "getExplainedQuoteByTopic",
  description: "Fetches a Bible verse based on topic and returns an explanation.",
  inputSchema: z.object({
    userTopic: z.string().describe("Bible verse")
  }),
  outputSchema: z.object({ text: z.string() }),
  execute: async ({ context }) => {
    const topic = `${context.userTopic}`;
    const verseResponse = await fetch(`https://bible-api.com/${encodeURIComponent(topic)}`);
    if (!verseResponse.ok) {
      return { text: `Failed to fetch verse for "${topic}".` };
    }
    const verseData = await verseResponse.json();
    const verseText = verseData.text?.trim() || "";
    const reference = verseData.reference || topic;
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return { text: `Verse: ${reference}
${verseText}
(Explanation unavailable \u2014 missing API key)` };
    }
    const prompt = `Explain this Bible verse briefly (1\u20133 sentences) in an uplifting way:

Verse: ${reference}
Text: "${verseText}"`;
    const llmResponse = await fetch(OPENROUTER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }]
      })
    });
    const llmData = await llmResponse.json();
    const explanation = llmData?.choices?.[0]?.message?.content?.trim() || "No explanation available.";
    return {
      text: `**${reference}**
*${verseText}*

**Meaning:**
${explanation}`
    };
  }
});

export { getExplainedQuoteByTopic };
