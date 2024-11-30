import React from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {TodoListProvider} from "./context/TodoListContext";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import DoneList from "./components/DoneList";
import HelpPage from "./components/HelpPage";

function NotFoundPage (){
    return <div>NotFoundPage</div>
}

function App() {
  return (
    <div className="App">
      <TodoListProvider>
          <Router>
              <nav>
                  <Link to={"/"}>Home</Link> | <Link to={"/done-list"}>Done-List</Link> | <Link to={"/todo-list"}>Todo-List</Link> | <Link to={"/helpPage"}>Help</Link>
              </nav>
              <Routes>
                  <Route path = {"/"} element={<TodoList/>}></Route>
                  <Route path={"/done-list"} element={<DoneList/>}></Route>
                  <Route path={"/todo-list"}  element = {<TodoList/>}></Route>
                  <Route path={"/helpPage"} element = {<HelpPage/>}></Route>
                  <Route path={"*"} element = {<NotFoundPage/>}></Route>

              </Routes>
          </Router>
      </TodoListProvider>
    </div>
  );
}

export default App;
