import React from "react";

//NAVIGATION
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

//SCREENS
import {Start, ListItems} from "src/screens";

export function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="ListItems" component={ListItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
