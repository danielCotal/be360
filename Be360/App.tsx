import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
const App = () => {
  const [message, setMessage] = useState('Welcome to the Home Screen!');

  const handlePress = (newMessage: string) => {
    setMessage(newMessage);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Home</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.contentText}>{message}</Text>
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomBarButton}
          onPress={() => handlePress('aqui iran las opciones!')}
        >
          <Text style={styles.bottomBarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarButton}
          onPress={() => handlePress('aqui iran las opciones de busqueda!')}
        >
          <Text style={styles.bottomBarText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarButton}
          onPress={() => handlePress('aqui iran las opciones del perfil!')}
        >
          <Text style={styles.bottomBarText}>Profile</Text>
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
  topBar: {
    height: 60,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
    color: '#333',
  },
  bottomBar: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#007bff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomBarButton: {
    padding: 10,
  },
  bottomBarText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;