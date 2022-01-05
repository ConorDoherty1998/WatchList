import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Auth, Login, Register } from './src/app/containers'
import { userStore } from './src/app/state'
import { Provider } from 'react-redux'
import { AppStyles } from './App.styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={ userStore }>
      <View style={ AppStyles.container }>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component = { Auth }/>
            <Stack.Screen name="Login" component = { Login }/>
            <Stack.Screen name="Register" component = { Register }/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}