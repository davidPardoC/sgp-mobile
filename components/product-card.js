import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function ProductCard(){
    return(
        <View style={Styles.container}>
            <Text>001</Text>
            <Text>Detergente </Text>
            <Text>200</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        padding:'3%'
    }
})