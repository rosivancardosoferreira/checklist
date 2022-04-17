import {
  NavigationProp,
  ParamListBase,
  createNavigationContainerRef,
} from "@react-navigation/native";

interface RootStackParamList {
  Start: {name: string};
}

export interface INavigation {
  navigation: NavigationProp<ParamListBase>;
  route: RootStackParamList;
}

export const navigationRef = createNavigationContainerRef();
