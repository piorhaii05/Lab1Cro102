import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "./index"
import Bai2ScreenDemo from "./bai2"
import bai3 from './bai3'

const StackDemo = createNativeStackNavigator();

const AppScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Bai1')}>
        <Text style={styles.text}>Bài 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Bai2')}>
        <Text style={styles.text}>Bài 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Bai3')}>
        <Text style={styles.text}>Bài 3</Text>
      </TouchableOpacity>
    </View>
  )
}
const Bai1Screen = () => { 
  return (
    <HomeScreen />
  )
}
const Bai2Screen = () => {
  return (
    <Bai2ScreenDemo />
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <StackDemo.Navigator>
        <StackDemo.Screen name='App' component={AppScreen} options={{ headerShown: false }} />
        <StackDemo.Screen name='Bai1' component={Bai1Screen}/>
        <StackDemo.Screen name='Bai2' component={Bai2Screen}/>
        <StackDemo.Screen name='Bai3' component={bai3}/>
      </StackDemo.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 15,
    width: 150,
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(230, 130, 130, 0.76)'
  }
})