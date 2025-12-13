
import { ButtonCustom, HeaderTittle, ScreenWrapper } from "../componenets";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {

  const navigation = useNavigation();
    return (
      <ScreenWrapper>
        
        <HeaderTittle text="Connexion / Inscription" />
        <ButtonCustom
          text="CONNEXION"
          onPress={() => navigation.navigate("Connexion")}
        />

        <ButtonCustom
          text="INSCRIPTION"
          onPress={() => navigation.navigate("Inscription")}
          secondary
        />
      </ScreenWrapper>
    );
}