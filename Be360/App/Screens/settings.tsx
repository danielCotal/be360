import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [description, setDescription] = useState('Tu descripción aquí...');
  const [email, setEmail] = useState('usuario@ejemplo.com');
  const [password, setPassword] = useState('********');

  const navigation = useNavigation();

  const pickImage = async (type: 'profile' | 'background') => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Se requiere acceso a la galería para cambiar la imagen.');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: type === 'profile' ? [1, 1] : [16, 9],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      if (type === 'profile') {
        setProfileImage(pickerResult.assets[0].uri);
      } else if (type === 'background') {
        setBackgroundImage(pickerResult.assets[0].uri);
      }
    }
  };

  const handleSave = () => {
    Alert.alert('Perfil guardado', 'Tu perfil ha sido actualizado con éxito.');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Flecha de regreso */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* Imagen de fondo */}
      <View style={styles.backgroundImageContainer}>
        <TouchableOpacity onPress={() => pickImage('background')}>
          <Image
            source={backgroundImage ? { uri: backgroundImage } : require('../../assets/Images/background.jpg')}
            style={styles.backgroundImage}
          />
          <Ionicons name="camera-outline" size={40} color="white" style={styles.cameraIcon} />
        </TouchableOpacity>

        {/* Imagen de perfil superpuesta */}
        <TouchableOpacity onPress={() => pickImage('profile')} style={styles.profileImageContainer}>
          <Image
            source={profileImage ? { uri: profileImage } : require('../../assets/Images/profile.png')}
            style={styles.profileImage}
          />
          <Ionicons name="camera" size={30} color="white" style={styles.cameraIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Descripción del usuario */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Descripción</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="Escribe una breve descripción sobre ti"
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Información del usuario */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Correo electrónico"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Contraseña"
            secureTextEntry
          />
        </View>

        {/* Botón para guardar el perfil */}
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Guardar cambios</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 6,
  },
  backgroundImageContainer: {
    height: 200,
    width: '100%',
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 50,
  },
  profileImageContainer: {
    position: 'absolute',
    top: 130,
    left: '50%',
    transform: [{ translateX: -50 }],
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inputGroup: {
    width: '90%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 30,
    alignItems: 'center',
  },
});

export default ProfileScreen;
