from slack_integration import process_slack_command
from flask import Flask, request

app = Flask(__name__)

@app.route('/slack', methods=['POST'])
def slack_command():
    command_data = request.json
    response = process_slack_command(command_data)
    return response, 200

if __name__ == "__main__":
    app.run(debug=True)
