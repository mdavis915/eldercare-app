// HealthTrackingScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, Picker } from 'react-native';
import { db } from './firebase'; // Import Firestore setup
import { collection, getDocs, addDoc } from 'firebase/firestore'; // Firestore methods

const HealthTrackingScreen = () => {
  const [medications, setMedications] = useState([]);
  const [medicationName, setMedicationName] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptom, setSelectedSymptom] = useState('');

  useEffect(() => {
    // Fetch medications from Firestore
    const fetchMedications = async () => {
      const medicationsSnapshot = await getDocs(collection(db, 'medications'));
      setMedications(medicationsSnapshot.docs.map(doc => doc.data()));
    };

    // Fetch symptoms from Firestore
    const fetchSymptoms = async () => {
      const symptomsSnapshot = await getDocs(collection(db, 'symptoms'));
      setSymptoms(symptomsSnapshot.docs.map(doc => doc.data()));
    };

    fetchMedications();
    fetchSymptoms();
  }, []);

  const addMedication = async () => {
    if (!medicationName) {
      Alert.alert('Error', 'Please enter a medication name');
      return;
    }

    try {
      await addDoc(collection(db, 'medications'), {
        name: medicationName,
        timestamp: new Date(),
      });
      setMedicationName('');
      Alert.alert('Success', 'Medication added!');
    } catch (error) {
      console.error('Error adding medication: ', error);
      Alert.alert('Error', 'There was an issue adding the medication');
    }
  };

  const addSymptom = async () => {
    if (!selectedSymptom) {
      Alert.alert('Error', 'Please select a symptom');
      return;
    }

    try {
      await addDoc(collection(db, 'symptoms'), {
        symptom: selectedSymptom,
        timestamp: new Date(),
      });
      setSelectedSymptom('');
      Alert.alert('Success', 'Symptom tracked!');
    } catch (error) {
      console.error('Error adding symptom: ', error);
      Alert.alert('Error', 'There was an issue tracking the symptom');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Health Tracking</Text>

      {/* Medication Reminder Section */}
      <Text>Medication Reminders</Text>
      <TextInput
        placeholder="Enter Medication"
        value={medicationName}
        onChangeText={setMedicationName}
      />
      <Button title="Add Medication" onPress={addMedication} />

      <FlatList
        data={medications}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Symptom Tracker Section */}
      <Text>Symptom Tracker</Text>
      <Picker
        selectedValue={selectedSymptom}
        onValueChange={(itemValue) => setSelectedSymptom(itemValue)}
      >
        <Picker.Item label="Select Symptom" value="" />
        <Picker.Item label="Pain Level" value="Pain Level" />
        <Picker.Item label="Fatigue" value="Fatigue" />
        {/* Add more symptoms as needed */}
      </Picker>
      <Button title="Track Symptom" onPress={addSymptom} />

      <FlatList
        data={symptoms}
        renderItem={({ item }) => <Text>{item.symptom}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default HealthTrackingScreen;
