import React from "react";
import {Text} from "react-native";
import {Teste} from "components/teste";
import {Novo} from "components/novo";
export function App() {
  return (
    <Text>
      Opa
      {"\n\n\n"}
      <Teste />
      <Novo />
    </Text>
  );
}
