# Configurations for GitHub, Slack, and Kestra
import os

SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/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"
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
KESTRA_API_URL = os.getenv("KESTRA_API_URL")
