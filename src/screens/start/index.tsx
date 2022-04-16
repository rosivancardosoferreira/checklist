import React from "react";
import {ImageBackground, Text} from "react-native";

// COMPONENTS
// STYLES
import {ContainerBackground, ContainerStart} from "./style";

export function Start() {
  return (
    <ImageBackground
      source={{uri: "https://reactjs.org/logo-og.png"}}
      style={ContainerBackground}>
      <ContainerStart>
        <Text>paddin hero homem</Text>
      </ContainerStart>
    </ImageBackground>
  );
}
