
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import { explainedQuoteAgent } from "./agents/explained-quote-agent.js";
import { a2aAgentRoute } from '../mastra/routes/a2aroute.js';

export const mastra = new Mastra({
  agents: { explainedQuoteAgent },
  storage: new LibSQLStore({ url: ":memory:" }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'debug',
  }),
  observability: {
    default: { enabled: true },
  },
  server: {
    build: {
      openAPIDocs: true,
      swaggerUI: true,
    },
    apiRoutes: [a2aAgentRoute]
  }
});
