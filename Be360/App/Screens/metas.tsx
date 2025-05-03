import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '..';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Metas'>;

const WeeklyGoals = () => {
  const [exerciseType, setExerciseType] = useState('Push-up');
  const [repetitions, setRepetitions] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleSubmit = () => {
    if (!repetitions || isNaN(Number(repetitions))) {
      Alert.alert('Error', 'Por favor, ingresa un número válido de repeticiones.');
      return;
    }

    const newGoal = `${exerciseType} - ${repetitions} repeticiones`;

    // Navega de regreso al Home con la nueva meta
    navigation.navigate('Home', { newGoal });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Selecciona tus metas semanales</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tipo de ejercicio</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={exerciseType}
              style={styles.picker}
              onValueChange={(itemValue) => setExerciseType(itemValue)}
            >
              <Picker.Item label="Flexiones" value="Push-up" />
              <Picker.Item label="Sentadillas" value="Squat" />
              <Picker.Item label="Abdominales" value="Crunch" />
              <Picker.Item label="Pull-ups" value="Pull-up" />
              <Picker.Item label="Burpees" value="Burpee" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Cantidad de repeticiones</Text>
          <TextInput
            style={styles.input}
            value={repetitions}
            onChangeText={setRepetitions}
            keyboardType="numeric"
            placeholder="Ej. 20"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Guardar meta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: { position: 'absolute', top: 40, left: 20, zIndex: 10 },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 6,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
  },
  inputGroup: { width: '100%', marginBottom: 20 },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: '#333',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  picker: { height: 50, width: '100%' },
  input: {
    height: 50,
    width: '100%',
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
    marginTop: 10,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default WeeklyGoals;
