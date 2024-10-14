import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const courses = [
  { id: '1', name: 'Course 1', description: 'Introduction to Course 1' },
  { id: '2', name: 'Course 2', description: 'Introduction to Course 2' },
  { id: '3', name: 'Course 3', description: 'Introduction to Course 3' },
];

const CoursesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseCard}>
            <Text style={styles.courseName}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  courseCard: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CoursesScreen;
