import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { todoContext } from "../Contexts/todoContexts";

export default function TodoItem({ item }) {
  const { updateHandler, pressHandler } = useContext(todoContext);

  return (
    <TouchableOpacity onPress={() => updateHandler(item.id)}>
      <View style={styles.item}>
        <AntDesign
          name="delete"
          size={24}
          color="black"
          onPress={() => pressHandler(item.id)}
        />
        <Text style={{ paddingLeft: 10 }}>{item.item}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
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
