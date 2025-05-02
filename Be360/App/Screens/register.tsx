import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }

    try {
      // Obtén los usuarios ya registrados
      const usersData = await AsyncStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];

      // Verifica si ya existe el usuario
      const exists = users.find((u: any) => u.username === username);
      if (exists) {
        Alert.alert('Error', 'El usuario ya existe');
        return;
      }

      // Agrega nuevo usuario
      users.push({ username, password });

      // Guarda nuevamente en AsyncStorage (simula guardar en archivo .json)
      await AsyncStorage.setItem('users', JSON.stringify(users));

      Alert.alert('Registrado', 'Usuario registrado con éxito');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un problema al registrar');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
  },
});
