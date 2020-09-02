import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => props.navigation.navigate('Component')}
        title='Go to Component'
      />
      <Button
        onPress={() => props.navigation.navigate('List')}
        title='Go to List'
      />
      <Button
        onPress={() => props.navigation.navigate('Image')}
        title='Go to Image'
      />
      <Button
        onPress={() => props.navigation.navigate('Counter')}
        title='Go to Counter'
      />
      <Button
        onPress={() => props.navigation.navigate('Color')}
        title='Go to Color'
      />
      <Button
        onPress={() => props.navigation.navigate('Square')}
        title='Go to Square'
      />
      <Button
        onPress={() => props.navigation.navigate('Text')}
        title='Go to Text'
      />
      <Button
        onPress={() => props.navigation.navigate('Box')}
        title='Go to Box'
      />
      {/* <TouchableOpacity>
        <Text onPress={() => props.navigation.navigate('List')}>
          Go to List
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
