import React from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {TodoListProvider} from "./context/TodoListContext";

function App() {
  return (
    <div className="App">
      <TodoListProvider>
        <TodoList/>
      </TodoListProvider>
    </div>
  );
}

export default App;
