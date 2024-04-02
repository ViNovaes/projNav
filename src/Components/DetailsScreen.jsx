import React from "react";
import { View, Text, Button } from "react-native";


export default props =>{
    return (
        <View style={{
            flex: 1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>Details Screen</Text>
            <Button
                title="Vá para Products"
                onPress={() => props.navigation.navigate('Products')}
            />
        </View>
        )
}