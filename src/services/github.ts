import fetch from "node-fetch";
import { config } from "../config";

export const assignIssue = async (username: string, issueNumber: string, repo: string) => {
  const url = `https://api.github.com/repos/${repo}/issues/${issueNumber}/assignees`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ assignees: [username] }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    console.error(`Failed to assign issue: ${errorMessage}`);
    return { success: false, message: errorMessage };
  }

  return { success: true };
};
