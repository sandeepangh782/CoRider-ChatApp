import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ChatScreen from './src/screens/ChatScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ChatScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});