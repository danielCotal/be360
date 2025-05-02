import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '..';

// Si planeas usar algún gráfico, puedes usar librerías como react-native-chart-kit o react-native-svg

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const App = ({ navigation }: Props) => {
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

      {/* Main Scrollable Content */}
      <ScrollView style={styles.scrollContent}>
        {/* Section for Images or Graphs */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gallery or Graphs</Text>
          
          {/* Example of displaying images */}
          <ScrollView horizontal={true} style={styles.imageScroll}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
              style={styles.image}
            />
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
              style={styles.image}
            />
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
              style={styles.image}
            />
          </ScrollView>

          {/* If you want to show a chart, you can add something like this (example with ChartKit) */}
          {/* <LineChart
            data={data} // Your chart data here
            width={Dimensions.get('window').width - 20} // Responsiveness
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
          /> */}
        </View>

        {/* Another Section with Content or Goals */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>More Content or Weekly Goals</Text>
          <Text style={styles.sectionText}>Here you can add additional content or goals.</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
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
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.bottomBarText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarButton}
          onPress={() => navigation.navigate('Metas')} // Navigate to Weekly Goals screen
        >
          <Text style={styles.bottomBarText}>Metas Semanales</Text>
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
  scrollContent: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff',
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
  },
  imageScroll: {
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
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
