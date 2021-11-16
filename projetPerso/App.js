import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { DetailCryptomonnaie, ListeCryptomonnaie } from "./src/components";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, initialRouteName: 'Liste des cryptomonnaies',}}>
      <Stack.Screen
        name="Liste des cryptomonnaies"
        component={ListeCryptomonnaie}
      />
      <Stack.Screen
        name="Détails"
        component={DetailCryptomonnaie}
      />
    </Stack.Navigator>
  );
}