import React from "react";
import {StatusBar} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

// TYPES
import {ILayoutGeneral} from "types/screens";

import {ContainerScrollView} from "./style";

export function LayoutGeneral({children}: ILayoutGeneral) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ContainerScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {children}
      </ContainerScrollView>
    </SafeAreaView>
  );
}
