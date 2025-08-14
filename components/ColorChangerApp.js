import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Color Changer App</Text>
      <Button title="WHITE" onPress={() => setBgColor('white')} />
      <Button title="LIGHT BLUE" onPress={() => setBgColor('lightblue')} />
      <Button title="LIGHT GREEN" onPress={() => setBgColor('lightgreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});