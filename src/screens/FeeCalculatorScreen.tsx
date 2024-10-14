import React, { useState } from 'react';
import { View, Text, CheckBox, Button, StyleSheet } from 'react-native';

const courses = [
  { id: '1', name: 'Course 1', price: 200 },
  { id: '2', name: 'Course 2', price: 300 },
  { id: '3', name: 'Course 3', price: 150 },
];

const FeeCalculatorScreen: React.FC = () => {
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const [total, setTotal] = useState(0);

  const handleSelection = (price: number, isSelected: boolean) => {
    setTotal(isSelected ? total + price : total - price);
  };

  return (
    <View style={styles.container}>
      {courses.map((course) => (
        <View key={course.id} style={styles.checkboxContainer}>
          <CheckBox
            value={selectedCourses.includes(course.id)}
            onValueChange={(isSelected) => handleSelection(course.price, isSelected)}
          />
          <Text>{course.name} (${course.price})</Text>
        </View>
      ))}
      <Button title="Calculate Total" onPress={() => setTotal(total)} />
      <Text>Total Fees: ${total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default FeeCalculatorScreen;
