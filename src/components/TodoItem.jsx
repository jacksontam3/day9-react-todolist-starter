import { TodoListContext } from "../context/TodoListContext";
import { useContext } from "react";
import "../CSS/TodoItem.css";
import {deleteById, update} from "../api/todo";

const TodoItem = ({todo}) => {
    const { dispatch } = useContext(TodoListContext);

    const handleToggleTodo = async () => {
        await update({id: todo.id, text: todo.text, done: true})
        dispatch({type: "TOGGLE", payload: todo.id});
    };

    const removeTodo = async () => {
        const deletedTodo = await deleteById(todo.id);
        dispatch({type: "REMOVE", payload: todo.id})
    };


    return (
        <div className={"todo-item-wrapper"}>
            <div className={`todo-text ${todo.done ? "done" : ""}`} onClick={handleToggleTodo}>{todo.text}</div>
            <button onClick={removeTodo}>X</button>
        </div>
    );
}

export default TodoItem;