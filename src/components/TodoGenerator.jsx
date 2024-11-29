import { useContext, useState } from "react";
import { TodoListContext } from "../context/TodoListContext";
import "./TodoGenerator.css";

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const { dispatch } = useContext(TodoListContext);

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleAdd = () => {
        if (text.trim()) {
            dispatch({ type: ADD_TODO, payload: text });
        }
    }

    return(
        <div className={"todo-generator-wrapper"}>
            <input maxLength={100} value={text} onChange={handleChange}/>
            <button onClick={handleAdd}>add</button>
        </div>
    );
}

export default TodoGenerator;