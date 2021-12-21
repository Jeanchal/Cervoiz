import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Acceuil from "./pages/Acceuil";
import Profil from "./pages/Profil";
import Panier from "./pages/Panier";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Acceuil"
        activeColor="#FBC95C"
        inactiveColor="#ccc"
        barStyle={{ backgroundColor: "#fff" }}
      >
        <Tab.Screen
          name="Acceuil"
          component={Acceuil}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={35} />
            ),
            tabBarLabel: false,
          }}
        />
        <Tab.Screen
          name="Profil"
          component={Profil}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={35} />
            ),
            tabBarLabel: false,
          }}
        />
        <Tab.Screen
          name="Panier"
          component={Panier}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={35} />
            ),
            tabBarLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
