
import { StyleSheet } from "react-native";
import { useState } from "react";
import { ButtonCustom, HeaderTittle, ScreenWrapper, InputCustom, FooterTittle, users } from "../componenets";
import { userService } from "../service/userService";

export const ConnexionScreen = ({navigation}) => {

 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loginUser} = userService()

  const handlepassword = (text) => {
    setPassword(text);
  };
  const handleemail = (text) => {
    setEmail(text);
  };

  const handleconnexion = async () => {
 
      const user =  await loginUser(email, password)
      if(!user){ //très important sinon quand je mets rien dans les input renvois erreur !
        return
      }
      navigation.navigate("IsConnected", { user });
    
  };

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
      <FooterTittle
        text="Mot de passe oublié ?"
        style={styles.header}
        onPress={() => navigation.navigate("ForgetPassword")}
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
