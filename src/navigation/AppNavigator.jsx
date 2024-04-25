import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreen from "../screens/HomePageScreen";
import ReceitaPageScreen from "../screens/ReceitaPageScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomePageScreen}
                    options={{
                        title: "Minha página inicial sobre Receitas",
                        headerShown: false,
                    }} />
                <Stack.Screen
                    name="ReceitaPageScreen"
                    component={ReceitaPageScreen}
                    options={{
                        title: "Receita",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}