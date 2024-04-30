import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState, useContext } from "react";
import { todoContext } from "../Contexts/todoContexts";

export default function AddTodo({}) {
  // const [todoInput, setTodoInput] = useState("");
  // const changeHandler = (val) => {
  //   setTodoInput(val);
  // };
  const { todoInput, changeHandler, addTodo } = useContext(todoContext);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        title="Add todo"
        color="coral"
        onPress={() => addTodo(todoInput)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
