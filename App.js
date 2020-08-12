import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/login";
import AddOrder from './screens/add-order'
import OrderDetail from './screens/order-detail'

const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='AddOrder' component={AddOrder} />
          <Stack.Screen name='OrderDetail' component={OrderDetail} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
