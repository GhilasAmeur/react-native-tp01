import { ButtonCustom } from "./ButtonCustom";
import { HeaderTittle } from "./HeaderTittle";
import { InputCustom } from "./InputCustom";
import { ScreenWrapper } from "./ScreenWrapper";
import { StyleSheet } from "react-native";

export const ConnexionScreen = () => {
  return (
    <ScreenWrapper>
      <HeaderTittle text="Connexion" style={styles.header} />
      <InputCustom placeholder="Email" value="" type="email" />
      <InputCustom placeholder="Mot de passe" value="" type="password"  />
      <ButtonCustom text = "CONNEXION" />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "purple",
  },

});
