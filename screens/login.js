import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <View>
      <View style={Styles.container}>
        <TextInput style={Styles.input} placeholder="INGRESE SU CODIGO" />
        <View style={Styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddOrder");
            }}
          >
            <View>
              <Text style={{color:'#fff', fontWeight:'bold'}}>
                INICIAR SESIÓN
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: "7%",
    borderRadius: 35,
    textAlign: "center",
  },
  container: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
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
