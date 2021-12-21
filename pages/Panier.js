import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../components/Logo";

export default function Panier() {
  return (
    <View style={style.view}>
      <Logo />
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: `#E5E5E5`,
  },
  text: { margin: 15 },
});
