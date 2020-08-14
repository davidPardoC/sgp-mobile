import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Modal,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import ModalAddProduct from "../components/modal-add-product";
import ProductCard from "../components/product-card";

export default function OrderDetail() {
  const [showCheck, setShowCheck] = useState(false);
  const [modal, showModal] = useState(false);
  const [cliente, setCliente] = useState("");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (productos.length > 0) {
      setShowCheck(true);
    }
  }, [productos]);

  const callbackModal = () => {
    showModal(false);
  };

  const addProduct = (obj) => {
    setProductos([...productos, obj]);
    console.log(productos);
  };

  return (
    <View style={{ height: "100%" }}>
      <Modal
        hardwareAccelerated
        animationType="fade"
        visible={modal}
        transparent={true}
        onRequestClose={() => {
          showModal(false);
        }}
      >
        <ModalAddProduct callback={callbackModal} addProduct={addProduct} />
      </Modal>
      <TextInput
        style={Styles.input}
        placeholder="CODIGO CLIENTE"
        onChangeText={(e) => {
          setCliente(e);
        }}
      />
      <Text style={{ marginRight: "auto", marginLeft: "auto", fontSize: 20 }}>
        {cliente}
      </Text>

      <FlatList
        style={Styles.lista}
        data={productos}
        renderItem={({ item }) => <ProductCard />}
      ></FlatList>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "3%",
        }}
      >
        <View>
          {showCheck && (
            <Icon
              name="check"
              reverse
              color="#00db66"
              onPress={() => {
                setShowCheck(false);
              }}
              size={30}
            />
          )}
        </View>

        <View>
          <Icon
            name="add"
            reverse
            color="#fa82b6"
            onPress={() => {
              showModal(true);
            }}
            size={30}
          />
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
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
  lista: {
    minHeight:'5%'
  },
});
