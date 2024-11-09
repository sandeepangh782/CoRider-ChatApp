import React, { memo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const ChatMessage = memo(({ message, isSelf }) => {
  return (
    <View style={[styles.container, isSelf ? styles.selfMessage : styles.otherMessage]}>
      {!isSelf && (
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: message.sender.image }} 
            style={styles.avatar}
          />
          {message.sender.is_kyc_verified && (
            <View style={styles.badge}>
            <MaterialIcons name="verified" size={14} color="#1C63D5" />
            </View>
          )}
        </View>
       
      )}
      <View style={[styles.messageContent, isSelf ? styles.selfMessageContent : styles.otherMessageContent]}>
        <Text style={[styles.messageText, isSelf ? styles.selfMessageText : styles.otherMessageText]}>{message.message}</Text>
      </View>
    </View>
  );
});

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
  badge: {
    position: 'absolute',
    top: 20,
    right: 10,
  }
});

export default ChatMessage;