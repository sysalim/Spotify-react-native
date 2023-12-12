import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import InnerFooter from '../templates/InnerFooter';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
     
      <InnerFooter />
    </NavigationContainer>
  );
};

export default AppNavigator;
