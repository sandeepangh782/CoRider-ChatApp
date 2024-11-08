import React, { useState, useRef, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable, KeyboardAvoidingView, Platform, Animated } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

const ChatInput = () => {
  const [showFileMenu, setShowFileMenu] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current; // Slide up from 20px below

  const toggleFileMenu = () => {
    setShowFileMenu((prevState) => !prevState);
  };

  const closeFileMenu = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setShowFileMenu(false));
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      console.log("Camera result:", result.uri); // Process the image URI as needed
    }
    closeFileMenu();
  };

  const openVideoRecorder = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Videos });
    if (!result.cancelled) {
      console.log("Video result:", result.uri); // Process the video URI as needed
    }
    closeFileMenu();
  };

  const openDocumentPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync();
    if (result.type === "success") {
      console.log("Document selected:", result.uri); // Process the file URI as needed
    }
    closeFileMenu();
  };


  useEffect(() => {
    if (showFileMenu) {
      fadeAnim.setValue(0);
      slideAnim.setValue(20);
      
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        })
      ]).start();
    }
  }, [showFileMenu]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 60}
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
            <Animated.View style={[
              styles.fileMenu, 
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }]
              }
            ]}>
              <Pressable style={styles.menuItem} onPress={openCamera}>
                <Ionicons name="camera-outline" size={24} color="white" />
              </Pressable>

              <Pressable style={styles.menuItem} onPress={openVideoRecorder}>
                <Ionicons name="videocam-outline" size={24} color="white" />
              </Pressable>

              <Pressable style={styles.menuItem} onPress={openDocumentPicker}>
                <Ionicons name="document-text-outline" size={24} color="white" />
              </Pressable>
              <View style={styles.menuTriangle} />
            </Animated.View>
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
    backgroundColor: 'transparent', 
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
    bottom: -8, 
    right: 45, 
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#008000', 
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
});

export default ChatInput;
