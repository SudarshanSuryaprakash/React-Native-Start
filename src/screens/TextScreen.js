import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [currentText, setCurrentText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={currentText}
        onChangeText={(newText) => setCurrentText(newText)}
      />
      {currentText.length > 5 ? null : (
        <Text>Password must be longer that 5 characters</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 15,
    borderColor: 'black',
  },
});

export default TextScreen;
