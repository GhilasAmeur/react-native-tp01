import { userService } from "../service/userService";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { ButtonCustom, HeaderTittle, ScreenWrapper, FooterTittle, InputCustom, users } from "../componenets";

export const InscriptionScreen = ({ navigation }) => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {addUser} = userService()

 
  const handleInscription = async () => {
      await addUser(nom, email, password)
      setNom("")
      setEmail("")
      setPassword("")
    
    };

  return (
    <ScreenWrapper>
      <HeaderTittle text="Inscription" />
      <InputCustom placeholder="Nom" value={nom} onChangeText={setNom} />
      <InputCustom
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        type="email"
      />
      <InputCustom
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        type="password"
      />
      <ButtonCustom text="INSCRIPTION" onPress={handleInscription} />
      <FooterTittle
        text="Déjà inscrit ?"
        action="Connectez vous"
        onPress={() => navigation.navigate("Connexion")}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});
