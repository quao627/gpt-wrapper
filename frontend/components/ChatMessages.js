// ChatMessages Component
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ChatMessages = ({ messages }) => {
  return (
    <ScrollView style={styles.chatContainer}>
      {messages.map((message, index) => (
        <View key={index} style={styles.messageWrapper}>
          <Text style={message.role === 'user' ? styles.userMessage : styles.gptMessage}>
            {message.role === 'user' ? 'You: ' : 'Ao Qu: '}{message.content}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    chatContainer: {
      flex: 1,
      padding: 10,
    },
    messageWrapper: {
      marginVertical: 5,
    },
    userMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#FDF8E2',
      padding: 15,
      borderRadius: 20, 
      color: '#003366',
      fontSize: 16,
      maxWidth: '80%', 
      overflow: 'hidden',
    },
    gptMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#ffffff',
      padding: 15,
      borderRadius: 20,
      borderColor: '#b3e5fc',
      borderWidth: 1,
      color: '#333',
      fontSize: 16,
      maxWidth: '80%',
      overflow: 'hidden',
    },
  });
  

export default ChatMessages;