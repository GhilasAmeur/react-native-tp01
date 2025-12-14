import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from "./ButtonCustom";
import { FooterTittle } from "./FooterTittle";

import { HeaderTittle } from "./HeaderTittle";
import { InputCustom } from "./InputCustom";
import { ScreenWrapper } from "./ScreenWrapper";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { users } from "./listUsers";

export const ConnexionScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlepassword = (text) => {
    setPassword(text);
  };
  const handleemail = (text) => {
    setEmail(text);
  };
  const handleconnexion = () => {
    const user = users.find((u) => u.email === email);
    if (!user) {
      alert("Email n'esxiste pas.");
      return;
    }
    if (user.password != password) {
      alert("Mot de passe incorrect.");
      return;
    } else {
      navigation.navigate("IsConnected", { user });
    }
  };

  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <HeaderTittle text="Connexion" />
      <InputCustom
        placeholder="Email"
        value={email}
        type="email"
        onChangeText={handleemail}
      />
      <InputCustom
        placeholder="Mot de passe"
        value={password}
        type="password"
        onChangeText={handlepassword}
      />
      <ButtonCustom text="CONNEXION" onPress={handleconnexion} />
      <FooterTittle
        text="S'inscrire"
        style={styles.header}
        onPress={() => navigation.navigate("Inscription")}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 5,
    color: "purple",
    fontSize: 15,
    fontWeight: "bold",
  },
});
