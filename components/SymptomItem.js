// SymptomItem.js
import React from 'react';
import { View, Text } from 'react-native';

const SymptomItem = ({ symptom }) => {
  return (
    <View>
      <Text>{symptom}</Text>
    </View>
  );
};

export default SymptomItem;
