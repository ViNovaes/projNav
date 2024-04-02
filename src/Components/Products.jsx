import React from "react";
import { Text, View, Button } from "react-native";

export default props =>{
    return (
        <View style={{
            flex: 1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>Product Screen</Text>
            <Button
                title="Vá para About"
                onPress={() => props.navigation.navigate('About')}
            />
        </View>
    )
}