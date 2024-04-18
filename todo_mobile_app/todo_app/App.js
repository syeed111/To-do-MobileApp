import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { item: "todo2", id: "2" },
    { item: "todo1", id: "1" },
    { item: "todo3", id: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id != key);
    });
  };

  const addTodo = (text) => {
    if (text.length > 2) {
      setTodos((prevTodos) => {
        return [{ item: text, id: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Empty todo", "There must be some text", [
        { text: "Okey", onPress: () => console.log("Alert dismissed") },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddTodo add={addTodo} />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
