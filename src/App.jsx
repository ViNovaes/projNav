import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Components/HomeScreen";
import DetailsScreen from "./Components/DetailsScreen";
import Products from "./Components/Products";
import About from "./Components/About";


const Stack = createNativeStackNavigator();

export default props =>{
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Inicio'}}></Stack.Screen>
                    <Stack.Screen name="Details" component={DetailsScreen} options={{title: 'Detalhes'}}></Stack.Screen>
                    <Stack.Screen name="Products" component={Products} options={{title:'Produtos'}}></Stack.Screen>
                    <Stack.Screen name="About" component={About} options={{title:'Sobre'}}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}