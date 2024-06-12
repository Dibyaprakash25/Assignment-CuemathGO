import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateAndLogin = async () => {
    const user = await AsyncStorage.getItem(email);
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.password === password) {
        navigation.navigate('Dashboard', { user: parsedUser });
      } else {
        Alert.alert('Error', 'Invalid credentials');
      }
    } else {
      Alert.alert('Error', 'User not found');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CUEMATH <Text style={styles.highlight}>Go!</Text></Text>
      <TextInput style={styles.input} placeholder="Email ID" placeholderTextColor="#999" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#999" value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.submitButton} onPress={validateAndLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
