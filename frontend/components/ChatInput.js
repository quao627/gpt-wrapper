// ChatInput Component
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ChatInput = ({ input, setInput, handleSend }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Type your message..."
        placeholderTextColor="#99aab5"
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#e6f7ff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#b3e5fc',
    padding: 10,
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },
  sendButton: {
    backgroundColor: '#4da6ff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatInput;