import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterApp from './components/CounterApp';
import ColorChangerApp from './components/ColorChangerApp';

export default function App() {
  return (
    <View style={styles.container}>
      <CounterApp />
      <View style={{ height: 30 }} /> {/* Space between sections */}
      <ColorChangerApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill screen height
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    padding: 20,
  },
});