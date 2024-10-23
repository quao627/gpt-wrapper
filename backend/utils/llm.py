import os
from openai import OpenAI
from dotenv import load_dotenv

class LLM_Client:
    def __init__(self):
        load_dotenv()
        openai_key = os.getenv('OPENAI_API_KEY')
        if not openai_key:
            raise ValueError("OpenAI API key not found. Please set OPENAI_API_KEY in your .env file.")

        self.client = OpenAI(api_key=openai_key)


    def chat(self, messages, model="gpt-4o-mini", temperature=0, force_json=False):
        try: 
            if force_json:
                response = self.client.chat.completions.create(
                    model=model,
                    seed=12345,
                    response_format={"type": "json_object"},
                    temperature=temperature,
                    messages=messages
                )
            else:
                response = self.client.chat.completions.create(
                    model=model,
                    seed=12345,
                    temperature=temperature,
                    messages=messages
                )
            return response

        except Exception as e:
            return f"Error: {str(e)}"