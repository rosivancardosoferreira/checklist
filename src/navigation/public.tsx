import React from "react";

//NAVIGATION
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

//SCREENS
import {Start} from "src/screens";

export function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{headerStyle: {backgroundColor: "red"}}}
        initialRouteName="Start">
        <Stack.Screen
          options={{headerShown: false}}
          name="Start"
          component={Start}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
