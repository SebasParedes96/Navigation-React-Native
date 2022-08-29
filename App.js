import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
  <Navigator>
    <Screen></Screen>
  </Navigator>

</NavigationContainer>
  );
}

