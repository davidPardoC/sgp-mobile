import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Modal } from "react-native";
import { Icon } from "react-native-elements";
import ModalAddOrder from "../components/modal-add-order";

export default function OrderDetail() {
  const [showCheck, setShowCheck] = useState(false);

  return (
    <View style={{ height: "100%" }}>
      <Modal>
        <ModalAddOrder />
      </Modal>
      <TextInput style={Styles.input} placeholder="CODIGO CLIENTE" />
      <Text style={{ marginRight: "auto", marginLeft: "auto", fontSize: 20 }}>
        0001
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "130%",
          padding: "3%",
        }}
      >
        <View>
          {showCheck && (
            <Icon
              name="check"
              reverse="true"
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
            reverse="true"
            color="#fa82b6"
            onPress={() => {
              setShowCheck(true);
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
});
