import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";

export default props =>{
    return (
        <View style={{
            flex: 1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text>Home Screen</Text>
            <Button
                title="Vá para Details"
                onPress={() => props.navigation.navigate('Details')}
            />
        </View>
        )
}