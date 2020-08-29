import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    setColors(() => {
      return [...colors, `rgb(${red}, ${green}, ${blue})`];
    });
  };

  return (
    <View>
      <Button title='lulu' onPress={randomRgb} />
      {/* <View
        style={{ height: 100, width: 100, backgroundColor: 'black' }}
      ></View> */}

      <FlatList
        data={colors}
        keyExtractor={(color) => color}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
