import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigator from './src/router/AppNavigator';
const Stack = createNativeStackNavigator();
const App = () => {
  return <AppNavigator />;
};
export default App;
