import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');

  const validateAndSignup = async () => {
    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters');
      return;
    }
    if (!/^\d+$/.test(age)) {
      Alert.alert('Error', 'Age must be a valid number');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const user = { email, password, firstName, age };
    await AsyncStorage.setItem(email, JSON.stringify(user));
    Alert.alert('Success', 'Account created successfully', [
      { text: 'OK', onPress: () => navigation.navigate('Login') }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CUEMATH <Text style={styles.highlight}>Go!</Text></Text>
      <TextInput style={styles.input} placeholder="Email ID" placeholderTextColor="#999" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#999" value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry placeholderTextColor="#999" value={confirmPassword} onChangeText={setConfirmPassword} />
      <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#999" value={firstName} onChangeText={setFirstName} />
      <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" placeholderTextColor="#999" value={age} onChangeText={setAge} />
      <TouchableOpacity style={styles.submitButton} onPress={validateAndSignup}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}
