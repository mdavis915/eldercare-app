// App.js
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootNavigator } from './navigation/RootNavigator'; // Your existing navigator
import HealthTrackingScreen from './HealthTrackingScreen'; // Import the new screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={RootNavigator} />
          <Stack.Screen name="Health Tracking" component={HealthTrackingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
