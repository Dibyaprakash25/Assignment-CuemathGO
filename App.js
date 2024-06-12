import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from "./components/Dashboard"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CUEMATH <Text style={styles.highlight}>Go!</Text></Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupbuttonText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button,styles.loginButton]}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginbuttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
