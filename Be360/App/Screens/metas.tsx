import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const WeeklyGoals = () => {
  const [exerciseType, setExerciseType] = useState('Push-up');
  const [repetitions, setRepetitions] = useState('');
  
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!repetitions || isNaN(Number(repetitions))) {
      Alert.alert('Error', 'Por favor, ingresa un número válido de repeticiones.');
      return;
    }

    Alert.alert('Meta guardada', `Ejercicio: ${exerciseType}\nRepeticiones: ${repetitions}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Botón de regreso */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Selecciona tus metas semanales</Text>

        {/* Selección de tipo de ejercicio */}
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

        {/* Ingreso de repeticiones */}
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

        {/* Botón para guardar la meta */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Guardar meta</Text>
        </TouchableOpacity>
      </View>
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
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
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
  picker: {
    height: 50,
    width: '100%',
  },
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
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WeeklyGoals;
