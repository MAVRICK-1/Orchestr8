import { exec } from "child_process";

// Command to create a new issue
export const handleCreateIssue = async ({ command, ack, respond }: any) => {
  await ack();

  const [owner, repo, title, ...bodyParts] = command.text.split(" ");
  const body = bodyParts.join(" ");

  if (!owner || !repo || !title || !body) {
    return respond("Usage: /create-issue <owner> <repo> <title> <body>");
  }

  const createIssueCommand = `node app.js create --owner=${owner} --repo=${repo} --title="${title}" --body="${body}"`;

  exec(createIssueCommand, (error, stdout, stderr) => {
    if (error) {
      return respond(`Error: ${stderr}`);
    }
    respond(`Successfully created issue: "${title}" in ${owner}/${repo}`);
  });
};
