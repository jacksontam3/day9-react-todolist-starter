import React from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {TodoListProvider} from "./context/TodoListContext";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

function NotFoundPage (){
    return <div>NotFoundPage</div>
}

function App() {
  return (
    <div className="App">
      <TodoListProvider>
          <Router>
              <Routes>
                  <Route path = {"/"} element={<TodoList/>}></Route>
                  <Route path={"/todo-list"}  element = {<TodoList/>}></Route>
                  <Route path={"*"} element = {<NotFoundPage/>}></Route>
              </Routes>
          </Router>
      </TodoListProvider>
    </div>
  );
}

export default App;
