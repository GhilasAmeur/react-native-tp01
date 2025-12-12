import { View, Text, Button } from "react-native"
import { ButtonCustom, HeaderTittle, ScreenWrapper } from "../componenets";

export const HomeScreen = () => {
    return (
      <ScreenWrapper>
        
        <HeaderTittle text="Connexion / Inscription" />
        <ButtonCustom
          text="Connexion"
          onPress={() => navigation.navigate("Connexion")}
        />

        <ButtonCustom
          text="Inscription"
          onPress={() => navigation.navigate("Inscription")}
          secondary
        />
      </ScreenWrapper>
    );
}