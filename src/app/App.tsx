import React from "react";
import {Navigation} from "src/navigation/public";
import {ThemeProvider} from "styled-components";
import theme from "src/styles/theme";
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
