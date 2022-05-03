import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import MainScreen from './app/screens/MainScreen';
import NotificationsScreen from './app/screens/NotificationsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="NotificationsScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)

