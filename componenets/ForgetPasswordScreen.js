import { useState } from "react"
import { ScreenWrapper } from "./ScreenWrapper"
import { userService } from "../service/userService"
import { HeaderTittle, InputCustom, ButtonCustom, FooterTittle } from "../componenets"

export const ForgetPasswordScreen = ({navigation}) => {

        const [email, setEamail] = useState("")
        const [password, setPassword] = useState("")
        const { checkEmail, passwordUpdate } = userService();

        const handleEmail = (text) =>{
                setEamail(text)
        }

        const handlePassword = (text) =>{
          setPassword(text)
        }


        const HandleUpdatePassword = async() => {

          await checkEmail(email);
          const isUpdated = await passwordUpdate(email, password);
          if(isUpdated){
              setEamail("")
              setPassword("")
          }
          
        
        }
      

    return (
      <ScreenWrapper>
        <HeaderTittle text="Mot de passe oublié" />
        <InputCustom
          value={email}
          placeholder="Email"
          type="email"
          onChangeText={handleEmail}
        />
        <InputCustom
          value={password}
          placeholder="Mot de passe"
          type="password"
          onChangeText={handlePassword}
        />
        <ButtonCustom text="MODIFIER" onPress={HandleUpdatePassword} />
        <FooterTittle
          action="Se Connecter"
          onPress={() => navigation.navigate("Connexion")}
        />
      </ScreenWrapper>
    );

}