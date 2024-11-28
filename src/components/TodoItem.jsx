const TodoItem = (prop) => {
    return (
        <div>
            <div>{prop.todo.text}</div>
            <button>X</button>
        </div>
    );
}

export default TodoItem