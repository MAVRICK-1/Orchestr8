// src/kestraClient.ts
import fetch from "node-fetch";
import { config } from "./config";
import { logger, LogLevel } from "./utils/logger";

export class KestraClient {
  private baseUrl: string;
  private apiToken: string;

  constructor() {
    this.baseUrl = config.KESTRA_BASE_URL;
    this.apiToken = config.KESTRA_API_TOKEN;
  }

  async triggerWorkflow(namespace: string, id: string, inputs: Record<string, any>) {
    const url = `${this.baseUrl}/api/v1/executions`;
    const payload = {
      namespace,
      id,
      inputs,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        logger(LogLevel.ERROR, `Failed to trigger Kestra workflow: ${errorText}`);
        throw new Error(`Kestra API Error: ${errorText}`);
      }

      const data = await response.json();
      logger(LogLevel.INFO, `Triggered Kestra workflow ${namespace}/${id}`);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        logger(LogLevel.ERROR, `Error triggering Kestra workflow: ${error.message}`);
      } else {
        logger(LogLevel.ERROR, `Error triggering Kestra workflow: ${String(error)}`);
      }
      throw error;
    }
  }
}
