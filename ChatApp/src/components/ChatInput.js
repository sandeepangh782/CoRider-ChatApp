import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const ChatInput = () => {
  const [showFileMenu, setShowFileMenu] = useState(false);

  const toggleFileMenu = () => {
    setShowFileMenu((prevState) => !prevState);
  };

  const closeFileMenu = () => {
    setShowFileMenu(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      style={styles.keyboardAvoidingView}
    >
    <View style={styles.container}>
      <View style={styles.inputbox}>
        <TextInput placeholder="Reply to @Rohit Yadav" style={styles.input} />
        <View style={styles.icons}>
          <TouchableOpacity style={styles.icon1} onPress={toggleFileMenu}>
            <MaterialIcons name="attach-file" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon2}>
            <MaterialIcons name="send" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="none"
        transparent={true}
        visible={showFileMenu}
        onRequestClose={closeFileMenu}
      >
        <Pressable style={styles.modalOverlay} onPress={closeFileMenu}>
          <View style={styles.fileMenu}>
            <Pressable style={styles.menuItem} onPress={() => { console.log('Camera Option'); closeFileMenu(); }}>
              <Ionicons name="camera-outline" size={24} color="white" />
            </Pressable>

            <Pressable style={styles.menuItem} onPress={() => { console.log('Video Option'); closeFileMenu(); }}>
              <Ionicons name="videocam-outline" size={24} color="white" />
            </Pressable>

            <Pressable style={styles.menuItem} onPress={() => { console.log('Document Option'); closeFileMenu(); }}>
              <Ionicons name="document-text-outline" size={24} color="white" />
            </Pressable>
            <View style={styles.menuTriangle} />
          </View>
        </Pressable>
      </Modal>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 8,
    backgroundColor: '#FAF9F4',
    
  },
  input: {
    flex: 1,
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    marginRight: 8,
  },
  icons: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
  },
  inputbox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 4,
  },
  icon1: {
    paddingRight: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Add a semi-transparent overlay
  },
  fileMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 125,
    right: 10,
    backgroundColor: '#008000',
    borderRadius: 32,
    padding: 8,
    width: '40%',
    elevation: 5,
  },
  menuTriangle: {
  position: 'absolute',
  bottom: -8, // Adjust this value to position the triangle
  right: 45, // Adjust this value to align with your menu
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderLeftWidth: 10,
  borderRightWidth: 10,
  borderTopWidth: 10,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderTopColor: '#008000', // Same as menu background color
},
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
});

export default ChatInput;
