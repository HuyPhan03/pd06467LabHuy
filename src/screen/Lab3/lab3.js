import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useState } from "react";
import Inputs from "../../Components/Inputs";
import ListItem from "../../Components/ListItem";
import styles from "./Styles";

const lab3 = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);
  return (
    <View>
      <Inputs />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
      />
      <Image style={styles.image} source={require("../../assets/icon.png")} />
    </View>
  );
};

export default lab3;
