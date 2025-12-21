import { useNavigation } from "@react-navigation/native"
import {Text, StyleSheet} from 'react-native'
import { ButtonCustom, HeaderTittle, ScreenWrapper } from "../componenets";

export const IsConnectedScreen = ({ text, prenom, onPress, route, navigation }) => {
  const { user } = route.params;

  return (
    <ScreenWrapper>
      <HeaderTittle text="Vous êtes connecté" />
      <Text style={styles.txt}>
        Bienvenue {user.nom} sur notre application de connexion inscription
      </Text>
      <ButtonCustom
        text="DÉCONNEXION"
        secondary
        onPress={() => navigation.navigate("Accueil")}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
   
    txt :{
        marginTop : 10
    },
  
    
})