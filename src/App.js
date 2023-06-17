import React from "react";
import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import ToDoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Monica`s Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
