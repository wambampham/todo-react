import React, { useState, useEffect } from "react";
import "./App.css";

//Import components
import Form from "./components/Form.js";
import TodoList from "./components/TodoList";

// States
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //USE EFFECT
  //First parameter is run only once when the application starts
  //Second parameter makes it run every time the state listed changes

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  // Functions and events

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Calvin's ToDo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
