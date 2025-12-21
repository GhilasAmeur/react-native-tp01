import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screnns/HomeScreen";
import { ConnexionScreen, IsConnectedScreen, InscriptionScreen, ForgetPasswordScreen} from "../componenets";



const Stack = createNativeStackNavigator()

export default function StackNavigation(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Accueil"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Connexion"
            component={ConnexionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Inscription"
            component={InscriptionScreen}
            options={{ headerShown: true, title: "" }}
          />
          <Stack.Screen
            name="IsConnected"
            component={IsConnectedScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPasswordScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}