import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ODUM SA</Text>
      <Text style={styles.subtitle}>Explore our wide range of courses to enhance your skills!</Text>
      <Button
        title="Explore Courses"
        onPress={() => navigation.navigate('Courses')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
