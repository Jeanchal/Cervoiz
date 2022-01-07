import React, { useState } from "react";
import { Image, View, Text, StyleSheet, TextInput } from "react-native";

export default function Regions({ region }) {
  return (
    <View style={style.regionElement}>
      <Text>{region.name}</Text>
      <Image style={style.image} source={region.image} />
    </View>
  );
}

const style = StyleSheet.create({
  regionElement: {
    backgroundColor: "#ffa",
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
});
