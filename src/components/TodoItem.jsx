import React, { useContext, useState } from "react";
import { TodoListContext } from "../context/TodoListContext";
import "../CSS/TodoItem.css";
import { deleteById, update } from "../api/todo";
import { Button, Modal, Input } from "antd";
import TodoDetails from "./TodoDetails";

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoListContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedText, setEditedText] = useState("");

    const handleToggleTodo = async () => {
        await update({ id: todo.id, text: todo.text, done: !todo.done });
        dispatch({ type: "TOGGLE", payload: todo.id });
    };

    const removeTodo = async () => {
        await deleteById(todo.id);
        dispatch({ type: "REMOVE", payload: todo.id });
    };

    const showEditModal = () => {
        setEditedText(todo.text);
        setIsModalOpen(true);
    };

    const handleSave = async () => {
        const updatedTodo = await update({ id: todo.id, text: editedText, done: todo.done });
        dispatch({ type: "EDIT", payload: updatedTodo });
        setIsModalOpen(false);
    };

    return (
        <div className="todo-item-wrapper">
            <div
                className={`todo-text ${todo.done ? "done" : ""}`}
                onClick={handleToggleTodo}
            >
                {todo.text}
            </div>
            <Button type="link" onClick={showEditModal}>
                Edit
            </Button>
            <Button type="link" danger onClick={removeTodo}>
                Delete
            </Button>

            <TodoDetails todoId={todo.id} />

            <Modal
                title="Edit Todo"
                open={isModalOpen}
                onOk={handleSave}
                onCancel={() => setIsModalOpen(false)}
            >
                <Input
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    placeholder="Edit your todo"
                />
            </Modal>
        </div>
    );
};

export default TodoItem;