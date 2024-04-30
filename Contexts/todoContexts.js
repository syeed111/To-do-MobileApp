import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const todoContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { item: "todo2", id: "2" },
    { item: "todo1", id: "1" },
    { item: "todo3", id: "3" },
  ]);

  const [todoInput, setTodoInput] = useState("");
  const changeHandler = (val) => {
    setTodoInput(val);
  };

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id != key);
    });
  };
  const updateHandler = (key, value) => {
    setTodoInput(value);
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
    <TodoContext.Provider
      value={{
        todos,
        todoInput,
        pressHandler,
        addTodo,
        updateHandler,
        changeHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default todoContextProvider;
