import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from './SearchPage';
import AddHymn from './AddHymn';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchPage">
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="AddHymn" component={AddHymn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}