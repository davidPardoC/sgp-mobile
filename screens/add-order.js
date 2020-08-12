import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default function AddOrder({ navigation }) {
  return (
    <View>
      <View style={Styles.addOrderButton}>
        <TouchableOpacity onPress={() => navigation.navigate('OrderDetail')}>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <Text style={Styles.addOrderText}>AGREGAR NUEVO PEDIDO</Text>
            <Icon name="add" color='white' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  addOrderButton: {
    backgroundColor: "#f27f77",
    padding: "3%",
    width: "90%",
    borderRadius: 35,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "3%",
  },
  addOrderText: {
    color: "white",
    fontWeight: "bold",
  },
});
