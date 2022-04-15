import React from "react";
import {ScrollView, StatusBar} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {ILayoutGeneral} from "types";
export function LayoutGeneral({children}: ILayoutGeneral) {
  return (
    <SafeAreaView style={{paddingHorizontal: 20}}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
