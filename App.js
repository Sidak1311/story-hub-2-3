import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WriteStory from './screens/WriteStory';
import Storyscreen from './screens/storyscreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name = "Read a Story" component={Storyscreen}/>
          <Tab.Screen name = "Write a Story" component={WriteStory}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}
