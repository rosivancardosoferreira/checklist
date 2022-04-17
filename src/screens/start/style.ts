import styled, {css} from "styled-components/native";

export const ContainerBackground = {
  flex: 1,
};

export const ContainerStart = styled.View`
  padding: 0 20px;
  flex: 1;
  justify-content: center;
`;

export const StartView = styled.View`
  /* position: absolute; */
`;

export const TitleStart = styled.Text`
  color: ${props => props.theme.colors.primary.white};
  font-size: ${props => props.theme.fontSize.large2};
  font-weight: 600;
  margin-bottom: 20px;
`;

export const SubTitleStart = styled.Text`
  color: ${props => props.theme.colors.primary.white};
  font-size: ${props => props.theme.fontSize.large1};
  font-weight: 400;
  margin-bottom: 20px;
`;

export const ControlScreen = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

export const ButtonNav = styled.TouchableOpacity`
  padding: 10px 25px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary.white};
`;

interface SelectedScreenProps {
  selected: boolean;
}
export const SelectedScreen = styled.View<SelectedScreenProps>`
  height: 10px;
  border-radius: 10px;
  background-color: green;
  width: 90px;
  margin-top: 5px;
  position: absolute;
  bottom: -15px;

  ${props =>
    props.selected &&
    css`
      right: 0;
    `}
  transition: all 2s;
`;
