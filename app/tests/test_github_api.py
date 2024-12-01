# Unit tests for GitHub API
import unittest
from github_api import fetch_issues, assign_issue

class TestGitHubAPI(unittest.TestCase):
    def test_fetch_issues(self):
        issues = fetch_issues("test-repo")
        self.assertIsInstance(issues, list)

    def test_assign_issue(self):
        response = assign_issue("test-repo", 1, "test-user")
        self.assertIn("assignees", response)

if __name__ == "__main__":
    unittest.main()
