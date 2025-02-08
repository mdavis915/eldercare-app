// NotificationService.js
import { Alert } from 'react-native';

const notifyMedicationTime = () => {
  Alert.alert("Medication Reminder", "It's time for your medication!");
};

export { notifyMedicationTime };
