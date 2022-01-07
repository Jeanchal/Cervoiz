import React, { useState } from "react";
import { Image, View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Regions from "./Regions";
import { regions } from "../data/data-regions";

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <View style={style.view}>
      <View style={style.searchContainer}>
        <TextInput
          style={style.input}
          id="recherche"
          placeholder="Météo"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <Icon
          name="search"
          style={style.searchIcon}
          size={20}
          color="#FBC95C"
        />
      </View>
      <Text style={style.result}>{search}</Text>
      <Image
        style={style.image}
        source={require("../images/familles-biere.jpg")}
      />
      <View style={style.regionContainer}>
        {regions.map((region) => (
          <Regions key={region.id} region={region} />
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "85%",
    height: 40,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  regionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 10,
    width: "85%",
  },
  input: {
    width: "92%",
  },
  searchIcon: {
    paddingBottom: 7,
  },
  result: {
    margin: 5,
    padding: 5,
    fontSize: "110%",
  },
  image: {
    width: "85%",
    height: "30%",
    borderRadius: 10,
  },
});
