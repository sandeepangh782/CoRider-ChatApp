import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ChatMessage = ({ message, isSelf }) => {
  return (
    <View style={[styles.container, isSelf ? styles.selfMessage : styles.otherMessage]}>
      {!isSelf && (
        <Image 
          source={{ uri: message.sender.image }} 
          style={styles.avatar}
        />
      )}
      <View style={[styles.messageContent, isSelf ? styles.selfMessageContent : styles.otherMessageContent]}>
        <Text style={[styles.messageText, isSelf ? styles.selfMessageText : styles.otherMessageText]}>{message.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  selfMessage: {
    justifyContent: 'flex-end',
  },
  otherMessage: {
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  messageContent: {
    maxWidth: '70%',
    padding: 12,
    
  },
  selfMessageContent: {
    backgroundColor: '#1C63D5',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,

  },
  otherMessageContent: {
    backgroundColor: '#F2F2F2',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  selfMessageText: {
    fontSize: 14,
    color: "white",
  },
  otherMessageText: {
    fontSize: 14,
    color: "gray",
  },
});

export default ChatMessage;