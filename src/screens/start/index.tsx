import React from "react";
import {ImageBackground} from "react-native";

// COMPONENTS

// ASSETS
import {Images} from "assets/images";

// STYLES
import {
  ButtonNav,
  ContainerBackground,
  ContainerStart,
  ControlScreen,
  StartView,
  SubTitleStart,
  TitleStart,
} from "./style";
import {SimpleText} from "src/styles/shared";

import {INavigation} from "types/navigation";

export function Start({navigation}: INavigation) {
  return (
    <ImageBackground
      source={Images.BackgrounStart}
      style={ContainerBackground}
      resizeMode="cover">
      <ContainerStart>
        <StartView>
          <TitleStart>CheckEasy</TitleStart>
          <SubTitleStart>
            Faça seu checklist e fique sempre organizado. É fácil e simples.
          </SubTitleStart>
        </StartView>
        <ControlScreen>
          <ButtonNav onPress={() => navigation.navigate("ListItems")}>
            <SimpleText>Ir para o início</SimpleText>
          </ButtonNav>
        </ControlScreen>
      </ContainerStart>
    </ImageBackground>
  );
}
