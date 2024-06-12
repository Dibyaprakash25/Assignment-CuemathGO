import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

export default function Dashboard({ route, navigation }) {
  const { user } = route.params;

  const logout = async () => {
    await AsyncStorage.removeItem(user.email);
    Alert.alert('Success', 'Logged out successfully', [
      { text: 'OK', onPress: () => navigation.navigate('Home') }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emailText}>{user.email}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


