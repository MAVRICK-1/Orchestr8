# Unit tests for Slack commands
import unittest
from slack_integration import process_slack_command

class TestSlackIntegration(unittest.TestCase):
    def test_assign_command(self):
        response = process_slack_command({"text": "/assign @test-user 1 test-repo"})
        self.assertIn("Issue", response["text"])

    def test_list_issues_command(self):
        response = process_slack_command({"text": "/list-issues test-repo"})
        self.assertIn("Open issues", response["text"])

if __name__ == "__main__":
    unittest.main()
