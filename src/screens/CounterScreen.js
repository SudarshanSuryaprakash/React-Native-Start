import React, { useState, useReducer } from 'react';
import { View, Text, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, count: state.count + 1 };
    case 'SUBTRACT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  //   [count, setCount] = useState(0);

  //   const add = () => setCount(count + 1);
  //   const sub = () => setCount(count - 1);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;
  return (
    <View>
      <Text>Counter App</Text>
      <Button title='+' onPress={() => dispatch({ type: 'ADD' })} />
      <Button title='-' onPress={() => dispatch({ type: 'SUBTRACT' })} />
      <Text>{count}</Text>
    </View>
  );
};

export default CounterScreen;
