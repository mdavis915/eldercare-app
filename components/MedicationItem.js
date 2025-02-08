// MedicationItem.js
import React from 'react';
import { View, Text } from 'react-native';

const MedicationItem = ({ name }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default MedicationItem;
