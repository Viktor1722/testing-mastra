import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { weatherWorkflow } from "./workflows/weather-workflow";
import { weatherAgent } from "./agents/weather-agent";
import { VercelDeployer } from "@mastra/deployer-vercel";

export const mastra = new Mastra({
  deployer: new VercelDeployer({
    maxDuration: 100,
    memory: 1536,
    regions: ["cdg1"],
  }),
  workflows: { weatherWorkflow },
  agents: { weatherAgent },
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
  telemetry: {
    enabled: false,
  },
  observability: {
    default: { enabled: true },
  },
});
