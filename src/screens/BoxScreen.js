import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.red}></View>
      <View style={styles.green}></View>
      <View style={styles.blue}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  red: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  green: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    top: 50,
  },
  blue: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
});

export default BoxScreen;
