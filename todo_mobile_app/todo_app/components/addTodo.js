import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";

export default function AddTodo({ add }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        multiline
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button title="Add todo" color="coral" onPress={() => add(text)} />
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
