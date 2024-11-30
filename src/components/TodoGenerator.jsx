import { useContext, useState } from "react";
import { TodoListContext } from "../context/TodoListContext";
import "../CSS/TodoGenerator.css";
import {Button } from "antd";
import {addTodoList} from "../api/todo";

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const { dispatch } = useContext(TodoListContext);

    const handleChange = (event) => {
        setText(event.target.value)
    }

     const handleAdd = async () => {
        if (text.trim()) {
            const newData = await addTodoList({id:null ,text: text, done: false })
            dispatch({ type: "ADD", payload: newData });
            setText("");
        }
    }

    return(
        <div className={"todo-generator-wrapper"}>
            <input maxLength={100} value={text} onChange={handleChange}/>
            <Button onClick={handleAdd}>add</Button>
        </div>
    );
}

export default TodoGenerator;