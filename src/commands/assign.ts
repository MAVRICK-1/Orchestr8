import { exec } from "child_process";

// Command to assign user to an issue
export const handleAssign = async ({ command, ack, respond }: any) => {
  await ack();

  const [owner, repo, issue, assignee] = command.text.split(" ");
  
  if (!owner || !repo || !issue || !assignee) {
    return respond("Usage: /assign <owner> <repo> <issue> <assignee>");
  }

  // Execute the GitHub assign task
  const assignCommand = `node app.js assign --owner=${owner} --repo=${repo} --issue=${issue} --assignee=${assignee}`;

  exec(assignCommand, (error, stdout, stderr) => {
    if (error) {
      return respond(`Error: ${stderr}`);
    }
    respond(`Assigned ${assignee} to issue #${issue} in ${owner}/${repo}`);
  });
};
