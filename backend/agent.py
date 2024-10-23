
def generate_response(llm_client, messages):
    try:
        response = llm_client.chat(messages)
        response_json = {
            "choices": [
                {
                    "message": {
                        "role": response.choices[0].message.role, 
                        "content": response.choices[0].message.content
                    }
                }
            ]
        }
        return response_json
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == '__main__':
    from utils.llm import LLM_Client
    llm_client = LLM_Client()
    print(llm_client.chat([{"role": "user", "content": "Hello, ChatGPT!"}]))