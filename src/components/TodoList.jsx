import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect} from "react";
import {getTodoList} from "../api/todo";
import {TodoListContext} from "../context/TodoListContext";

const TodoList = () => {

    const {dispatch} = useContext(TodoListContext);

    useEffect( () =>{
     getTodoList().then( (todos) => {
         dispatch({type: "INIT", payload: todos})
     })
    }, []);

  return (
      <div>
          <h2>{"Todo List"}</h2>
          <TodoGroup/>
          <TodoGenerator/>
      </div>
  );
}

export default TodoList