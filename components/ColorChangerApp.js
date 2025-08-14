import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ColorChangerApp() {
  const [bg, setBg] = useState("#ffffff"); // default white

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <Text style={styles.title}>Color Changer App</Text>
      <Button title="White" onPress={() => setBg("#ffffff")} />
      <Button title="Light Blue" onPress={() => setBg("#ADD8E6")} />
      <Button title="Light Green" onPress={() => setBg("#90EE90")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 }
});