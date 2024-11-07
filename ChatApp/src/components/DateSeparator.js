import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateSeparator = ({ date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#888',
  },
});

export default DateSeparator;
