// This is the correct code for deployment.
import { Agent } from "@mastra/core/agent";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import "dotenv/config";

const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";

const getExplainedQuoteByTopic = createTool({
    id: "getExplainedQuoteByTopic",
    description: "Takes a user's request, finds a relevant verse, and explains it.",
    inputSchema: z.string().describe("The user's full request, e.g., 'a verse about hope'"),
    outputSchema: z.object({ text: z.string() }),
    execute: async (context: any) => {
        const userMessage: string = context.context || "";
        let topic = '';
        const parts = userMessage.toLowerCase().split('about ');
        if (parts.length > 1) topic = parts[1].trim();
        if (!topic) return { text: "Please ask for a verse with a topic, like 'a verse about hope'." };

        const topicMap: Record<string, string> = {
            strength: "Philippians 4:13", hope: "Jeremiah 29:11", love: "1 Corinthians 13:4-7",
            peace: "John 14:27", faith: "Hebrews 11:1", forgiveness: "Ephesians 4:32",
        };
        const verseRef = topicMap[topic];
        if (!verseRef) return { text: `Sorry, no verse for "${topic}".` };

        try {
            const quoteResponse = await fetch(`https://bible-api.com/${encodeURIComponent(verseRef)}`);
            if (!quoteResponse.ok) throw new Error(`Bible API failed.`);
            const quoteData = await quoteResponse.json();
            const verse = quoteData.reference;
            const text = quoteData.text.trim();

            const key = process.env.OPENROUTER_API_KEY;
            if (!key) return { text: `Verse: ${verse}\n${text}\n(Explanation unavailable)` };
            
            const prompt = `Explain this verse briefly (1-3 sentences) in an uplifting way:\n\nVerse: ${verse}\nText: "${text}"`;
            const llmResponse = await fetch(OPENROUTER_ENDPOINT, {
                method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
                body: JSON.stringify({ model: "gpt-4o-mini", messages: [{ role: "user", content: prompt }] }),
            });
            if (!llmResponse.ok) throw new Error(`LLM provider failed.`);
            const llmData = await llmResponse.json();
            const explanation = llmData?.choices?.[0]?.message?.content?.trim() || "No explanation generated.";
            
            const finalText = `Here's a verse about **${topic}**:\n\n**${verse}**\n*${text}*\n\n**Meaning:**\n${explanation}`;
            return { text: finalText };
        } catch (error: any) {
            return { text: "Sorry, an error occurred while processing your request." };
        }
    },
});

export const explainedQuoteAgent = new Agent({
    id: "explainedQuoteAgent", name: "Explained Quote Agent",
    instructions: "A helpful AI agent that takes a topic from a user, finds a relevant Bible verse, and provides an explanation.",
    model: { providerId: "openrouter", modelId: "gpt-4o-mini", apiKey: process.env.OPENROUTER_API_KEY },
    tools: { getExplainedQuoteByTopic },
});