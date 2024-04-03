import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './Login'
import Resignter from './Resignter'
import Main from './Main'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Resister' component={Resignter}/>
        <Stack.Screen name='Main' component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})