import React, { useState } from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity , TextInput} from "react-native";

export default function ModalAddProduct(props) {
  const [productName , setProductName] = useState('')
  const [productCant, setProductCant] = useState(0)
  const addProduct = () => {
    props.addProduct({key:productName, codigo:productName,cant:productCant})
    props.callback()
  }

  return (
    <View style={Styles.genCont}>
      <View style={Styles.container}>
        <TextInput style={Styles.input} placeholder="CODIGO PRODUCTO" onChangeText={(e)=>{setProductName(e)}}/>
        <Text>0001</Text>
        <TextInput style={Styles.input} placeholder="CANTIDAD" keyboardType='numeric' onChangeText={(e)=>{setProductCant(e)}}/>
        <View style={Styles.button}>
          <TouchableOpacity onPress={()=>{addProduct()}}>
            <View>
              <Text style={{color:'white', fontWeight:'bold'}}> AGREGAR </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor:'#fff',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:'3%',
    borderRadius:35
  },
  genCont:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height:'100%'
  },
  input: {
    borderWidth: 1,
    marginBottom: "3%",
    borderRadius: 35,
    textAlign: "center",
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "3%",
  },
  button:{
    backgroundColor:'#E08774',
    display:'flex',
    flexDirection:'column',
    padding:10,
    alignSelf:'flex-start',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:35
  }
});
