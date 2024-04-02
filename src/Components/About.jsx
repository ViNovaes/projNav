import React from "react";
import { Text, View, Button } from "react-native";

export default props =>{
    return (
        <View style={{
            flex: 1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>About Screen</Text>
            <Button
                title="Volte para o Inicio"
                onPress={() => props.navigation.navigate('Home')}
            />
        </View>
    )
}