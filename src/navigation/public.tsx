import React from "react";

//NAVIGATION
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

//SCREENS
import {Login} from "src/screens";

export function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: "red"}}}
        initialRouteName="Onboarding">
        <Stack.Screen
          options={{headerShown: false}}
          name="Onboarding"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
