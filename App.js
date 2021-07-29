import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{value}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {setValue(value + 1)}}>
        <Text>Click-me!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontSize: 50
  },
  button: {
    width: 100,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#f0d58b",
    justifyContent: "center",
    alignItems: "center"
  },
});
