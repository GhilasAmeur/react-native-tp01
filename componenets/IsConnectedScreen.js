import { ButtonCustom } from "./ButtonCustom"
import { HeaderTittle } from "./HeaderTittle"
import { ScreenWrapper } from "./ScreenWrapper"
import {Text, StyleSheet} from 'react-native'

export const IsConnectedScreen = ({text, prenom, onPress, route}) =>{

    const{user} = route.params;

    return (
      <ScreenWrapper >
        <HeaderTittle text="Vous êtes connecté" />
        <Text style = {styles.txt}>
          Bienvenue {user.nom} sur notre application de connexion inscription
        </Text>
        <ButtonCustom text="DÉCONNEXION" secondary/>
      </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
   
    txt :{
        marginTop : 10
    },
  
    
})