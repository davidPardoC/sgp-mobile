import React from "react";
import { View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function ModalAddOrder() {
  return (
    <View>
      <TextInput placeholder="CODIGO PRODUCTO" />
      <TextInput placeholder="CANTIDAD" />
      <View style={{width:'50%'}}>
        <Button title="AGREGAR"></Button>
      </View>
    </View>
  );
}
