import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

const getExplainedQuoteByTopic = createTool({
  id: "getExplainedQuoteByTopic",
  description: "Finds a relevant Bible verse and explains it, given a clean topic.",
  inputSchema: z.object({
    topic: z.string()
  }),
  outputSchema: z.object({
    text: z.string()
  }),
  execute: async (input) => {
  }
});

export { getExplainedQuoteByTopic };
