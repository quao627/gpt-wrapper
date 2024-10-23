from flask import Flask, request, jsonify
from agent import generate_response
from utils.llm import LLM_Client

app = Flask(__name__)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    if not data or 'messages' not in data:
        return jsonify({"error": "Invalid request, please provide messages."}), 400

    messages = data['messages']
    response_message = generate_response(llm_client, messages)
    print(response_message)
    return jsonify(response_message)

if __name__ == '__main__':
    llm_client = LLM_Client()
    app.run(host='0.0.0.0', port=8080, debug=True)