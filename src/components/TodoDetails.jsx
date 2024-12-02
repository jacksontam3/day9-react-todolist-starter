import React, { useState } from "react";
import { getTodoById } from "../api/todo";
import { Button } from "antd";

const TodoDetails = ({ todoId }) => {
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchTodoDetails = async () => {
        if (todo) {
            setTodo(null);
            return;
        }
        setLoading(true);
        try {
            const todoDetails = await getTodoById(todoId);
            setTodo(todoDetails);
        } catch (error) {
            console.error("Failed to fetch todo details:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Button onClick={fetchTodoDetails}>
                {todo ? "Hide Details" : "Todo Details"}
            </Button>
            {loading && <p>Loading...</p>}
            {todo && (
                <div>
                    <p>ID: {todo.id}</p>
                    <p>Text: {todo.text}</p>
                    <p>Done: {todo.done ? "Yes" : "No"}</p>
                </div>
            )}
        </div>
    );
};

export default TodoDetails;