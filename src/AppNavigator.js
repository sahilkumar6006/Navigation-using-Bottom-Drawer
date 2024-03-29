import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './normal/Splash';
import Parent from './normal/Parent';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Parent' component={Parent} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})