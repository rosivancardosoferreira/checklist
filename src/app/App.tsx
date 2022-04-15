import React from "react";
import {Navigation} from "src/navigation/public";
import {ThemeProvider} from "styled-components";
import theme from "src/styles/theme";
import {StatusBar} from "react-native";
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={"#00336e"} />
      <Navigation />
    </ThemeProvider>
  );
}
