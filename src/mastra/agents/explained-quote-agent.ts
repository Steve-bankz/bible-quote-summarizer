import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { getExplainedQuoteByTopic } from "../tools/getExplainedQuoteByTopic.js";
 import "dotenv/config";

export const explainedQuoteAgent = new Agent({
  id: "bibleSummaryAgent",
  name: "Bible Summary Agent",
  instructions: `
    You are a helpful Bible assistant.

    You will receive only a Bible verse or chapter reference as input,
    for example: "John 3:16" or "Psalm 23".

    Use the summarizeBibleVerseTool to:
    - Retrieve the Bible passage text.
    - Summarize it in 2–4 sentences.
    - Return both the verse and its summary.

    If the input is not a valid Bible reference, politely ask the user to provide one.
    Keep all responses respectful and spiritually uplifting.
  `,
  model: {
    providerId: "openrouter",
    modelId: "gpt-4o-mini",
    apiKey: process.env.OPENROUTER_API_KEY,
  },
  tools: { getExplainedQuoteByTopic },
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db",
    }),
  }),
});
