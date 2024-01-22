import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  itemText: {
    fontSize: 18,
  },
});

export default ListItem;
