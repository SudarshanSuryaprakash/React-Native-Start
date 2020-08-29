import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';
const forest = require('../../assets/forest.jpg');
const beach = require('../../assets/beach.jpg');
const mountain = require('../../assets/mountain.jpg');

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title='Forest' image={forest} />
      <ImageDetail title='Beach' image={beach} />
      <ImageDetail title='Mountain' image={mountain} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
