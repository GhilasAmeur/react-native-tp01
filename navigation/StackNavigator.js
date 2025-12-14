import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screnns/HomeScreen";
import { ConnexionScreen } from "../componenets/ConnxionScreen";
import { InscriptionScreen } from "../componenets/InscriptionScreen";
import { IsConnectedScreen } from "../componenets/IsConnectedScreen";


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
          <Stack.Screen name="Connexion" component={ConnexionScreen} />
          <Stack.Screen name="Inscription" component={InscriptionScreen} />
          <Stack.Screen name="IsConnected" component={IsConnectedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}