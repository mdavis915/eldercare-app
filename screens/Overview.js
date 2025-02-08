import React from "react";
import { View, Text, Button, Linking, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  // Function to call emergency contact
  const callEmergency = () => {
    Linking.openURL("tel:911"); // Replace with a custom contact if needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ElderCare App</Text>

      {/* Emergency Button */}
      <Button title="Call Emergency" onPress={callEmergency} color="red" />

      {/* Navigation Buttons */}
      <Button title="Health Tracking" onPress={() => navigation.navigate("HealthTracking")} />
      <Button title="Transportation" onPress={() => navigation.navigate("Transportation")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
