import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function Login({navigation}) {
  return (
    <View>
      <View style={Styles.container}>
        <TextInput style={Styles.input} placeholder='INGRESE SU CODIGO'/>
        <Button title="Iniciar Sesión" onPress={()=>{navigation.navigate('AddOrder')}}></Button>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom:'7%',
    borderRadius:35,
    textAlign:'center'
  },
  container:{
      width:'60%',
      display:'flex',
      flexDirection:'column',
      height:'100%',
      justifyContent:'center',
      marginLeft:'auto',
      marginRight:'auto'
  }
});
