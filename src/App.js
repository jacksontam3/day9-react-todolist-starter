import React from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {TodoListProvider} from "./context/TodoListContext";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TodoListProvider>
          <Router>
              <Routes>
                  <Route path={"/todo-list"}  element = {<TodoList/>}>
                  </Route>
              </Routes>
          </Router>
      </TodoListProvider>
    </div>
  );
}

export default App;
