import React, { useReducer } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const CHANGE_VALUE = 15;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_red', payload: CHANGE_VALUE })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -CHANGE_VALUE })
        }
        color='red'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: CHANGE_VALUE })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -CHANGE_VALUE })
        }
        color='green'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: CHANGE_VALUE })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -CHANGE_VALUE })
        }
        color='blue'
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
