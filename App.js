//@refresh reset
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import Home from './screens/Home'
import Register from './screens/Register'
import Error from './screens/Error'

import * as firebase from 'firebase';
import 'firebase/firestore';
import {firebaseConfig} from './config';

if( firebase.apps.length === 0 ){
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
      initialRouteName="Login" 
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Oops" component={Error} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// TODO: firebase login, firebase chatting
