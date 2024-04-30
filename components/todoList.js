import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TodoContext } from "../Contexts/todoContexts";
import TodoItem from "./todoItem";

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  console.log({ todos });
  return (
    <View style={styles.list}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>
            {item.id} {item.item}
          </Text>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  },
});

{
  /* <TodoItem item={item} /> */
}
