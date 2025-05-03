import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import { RootStackParamList } from '..';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  const route = useRoute<Props['route']>();
  const [goals, setGoals] = useState<string[]>([]);

  // Al navegar de vuelta a Home, agregar la nueva meta al estado
  useEffect(() => {
    if (route.params?.newGoal) {
      setGoals((prevGoals) => [...prevGoals, route.params!.newGoal]);
    }
  }, [route.params?.newGoal]);

  const images = [
    require('../../assets/Images/img1.jpg'),
    require('../../assets/Images/img2.jpg'),
    require('../../assets/Images/img3.jpeg'),
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Home</Text>
      </View>

      <ScrollView style={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Galería</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.imageScroll}
            contentContainerStyle={styles.imageScrollContent}
          >
            {images.map((source, index) => (
              <Image key={index} source={source} style={styles.largeImage} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Metas Semanales</Text>
          {goals.length === 0 ? (
            <Text style={styles.sectionText}>No has añadido ninguna meta aún.</Text>
          ) : (
            <View style={styles.goalsList}>
              {goals.map((goal, index) => (
                <Text key={index} style={styles.goalItem}>• {goal}</Text>
              ))}
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Text style={styles.bottomBarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Text style={styles.bottomBarText}>Cursos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.bottomBarText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarButton}
          onPress={() => navigation.navigate('Metas')}
        >
          <Text style={styles.bottomBarText}>Metas Semanales</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  topBar: {
    height: 60,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  scrollContent: { flex: 1, padding: 20 },
  section: { marginBottom: 20 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff',
    textAlign: 'center',
  },
  sectionText: { fontSize: 16, color: '#333', textAlign: 'center' },
  goalItem: {
    fontSize: 16,
    color: '#000',
    marginBottom: 6,
    marginLeft: 10,
  },
  goalsList: {
    marginTop: 10,
  },
  imageScroll: {
    marginBottom: 10,
    maxHeight: 300,
    alignSelf: 'center',
  },
  imageScrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  largeImage: {
    width: 250,
    height: 250,
    marginRight: 15,
    borderRadius: 15,
  },
  bottomBar: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#007bff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomBarButton: { padding: 10 },
  bottomBarText: { color: '#fff', fontSize: 16 },
});

export default Home;
