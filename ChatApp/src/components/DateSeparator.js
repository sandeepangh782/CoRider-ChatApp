// components/DateSeparator.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateSeparator = ({ date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.dateText}>{date}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 32,    
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
    
  },
  dateText: {
    fontSize: 15,
    color: '#666',
    marginHorizontal: 8,
    paddingHorizontal: 8,
  },
});

export default DateSeparator;