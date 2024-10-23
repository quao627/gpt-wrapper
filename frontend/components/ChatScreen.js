import React, { useState } from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import ChatMessages from '../components/ChatMessages';
import ChatInput from '../components/ChatInput';
import axios from 'axios';
import { OPENAI_API_KEY } from '@env';

const ChatScreen = () => {
  const [messages, setMessages] = useState([{ role: 'system', content: 'I am sleep therapist. My job is to help users sleep better in all sorts of creative ways!' }]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      // uncomment the following code to directly fetch response from OpenAI
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o',
          messages: [...messages, userMessage],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );
      
      // uncomment the following code to use Python backend
      // const response = await axios.post(
      //     'https://22930b5b.r26.cpolar.top/api/chat',
      //     {
      //       messages: [...messages, userMessage],
      //     },
      //     {
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     }
      // );

      const gptMessage = response.data.choices[0].message;
      setMessages((prevMessages) => [...prevMessages, gptMessage]);
    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ChatMessages messages={messages} />
      <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7ff', // Light blue background for a soothing effect
  },
});

export default ChatScreen;