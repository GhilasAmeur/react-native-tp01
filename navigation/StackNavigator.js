import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screnns/HomeScreen";


const Stack = createNativeStackNavigator()

export default function StackNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name ="Accueil" 
                    component ={HomeScreen} 
                    options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}