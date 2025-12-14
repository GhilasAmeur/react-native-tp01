import { useNavigation } from "@react-navigation/native";
import { ButtonCustom } from "./ButtonCustom";
import { FooterTittle } from "./FooterTittle";
import { HeaderTittle } from "./HeaderTittle";
import { InputCustom } from "./InputCustom";
import { ScreenWrapper } from "./ScreenWrapper";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { users } from "./listUsers";

export const InscriptionScreen = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const isValidPassword = (password) => {
    return passwordRegex.test(password);
  };
  const isValidEmail = (email) => {
    return emailRegex.test(email);
  };

  const addUser = () => {
    if (nom.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Tous les champs sont obligatoire");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Email non valide");
      return;
    }

    if (!isValidPassword(password)) {
      alert("Mot de passe invalide, 8 caractères, 1 majuscule, 1 minuscule");
      return;
    }

    const user = {
      nom,
      email,
      password,
    };
    users.push(user);
    alert("Utilisateur ajouté avec succès");
    setNom("")
    setEmail("")
    setPassword("")
  };

  const navigation = useNavigation();
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
      <ButtonCustom text="INSCRIPTION" onPress={addUser} />
      <FooterTittle
        text="Déjà inscrit ?"
        action="Connectez vous"
        onPress={() => navigation.navigate("Connexion")}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});
