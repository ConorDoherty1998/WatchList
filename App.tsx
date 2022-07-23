import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import React from 'react';
import Amplify from 'aws-amplify'

import { Auth, Login, Register } from './src/app/containers'
import { userStore } from './src/app/state'
import awsconfig from './src/aws-exports'
import { AppStyles } from './App.styles';

Amplify.configure(awsconfig)


const Stack = createNativeStackNavigator();


function App() {
  return (
    <Provider store={ userStore }>
      <View style={ AppStyles.container }>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ 
              headerShown: true,
              headerTransparent: true,
              headerTitle: "",
              headerTintColor: '#D50000',
            }}>
            <Stack.Screen name="Main" component = { Auth }/>
            <Stack.Screen name="Login" component = { Login }/>
            <Stack.Screen name="Register" component = { Register }/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

export default App