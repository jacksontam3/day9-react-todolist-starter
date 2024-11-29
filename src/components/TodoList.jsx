import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useState} from "react";
import {getTodoList} from "../api/todo";
import {TodoListContext} from "../context/TodoListContext";

const TodoList = () => {

    const {dispatch} = useContext(TodoListContext);
    const [loading, setloading] = useState(false);

    useEffect( () =>{
        setloading(true);
     getTodoList().then( (todos) => {
         dispatch({type: "INIT", payload: todos})
     }).finally( () => {
         setloading(false);
     })
    }, []);

  return (
      loading ? <div> loading </div> :
      <div>
          <h2>{"Todo List"}</h2>
          <TodoGroup/>
          <TodoGenerator/>
      </div>
  );
}

export default TodoList