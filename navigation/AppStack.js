import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HealthTrackingScreen } from "../screens";

import { HomeScreen } from "../screens";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HealthTrack" component={HealthTrackingScreen}/>
    </Stack.Navigator>
  );
};
