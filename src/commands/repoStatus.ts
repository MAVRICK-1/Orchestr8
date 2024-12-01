import { exec } from "child_process";

// Command to check repository status
export const handleRepoStatus = async ({ command, ack, respond }: any) => {
  await ack();

  const [owner, repo] = command.text.split(" ");

  if (!owner || !repo) {
    return respond("Usage: /repo-status <owner> <repo>");
  }

  const statusCommand = `node app.js status --owner=${owner} --repo=${repo}`;

  exec(statusCommand, (error, stdout, stderr) => {
    if (error) {
      return respond(`Error: ${stderr}`);
    }
    respond(`Repository Status:\n${stdout}`);
  });
};
