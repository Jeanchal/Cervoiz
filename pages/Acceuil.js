import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import Search from "../components/Search";

export default function Acceuil() {
  return (
    <View style={style.home}>
      <Logo />
      <Search />
    </View>
  );
}

const style = StyleSheet.create({
  home: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: `#E5E5E5`,
  },
});
