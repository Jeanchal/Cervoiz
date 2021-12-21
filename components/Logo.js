import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Logo() {
  return (
    <View style={style.logo}>
      <Icon style={style.arrow} name="arrow-left" size={25} />
      <Text style={style.text}>Cervoiz</Text>
    </View>
  );
}

const style = StyleSheet.create({
  arrow: {
    padding: 21,
    fontSize: "150%",
  },
  logo: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
  },
  text: {
    margin: 15,
    textAlign: "center",
    fontSize: "150%",
    width: "50%",
  },
});
