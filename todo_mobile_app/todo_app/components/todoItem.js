import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <Text style={styles.item}>{item.item}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    fontWeight: "bold",
    fontSize: 17,
    borderRadius: 5,
  },
});
