import React, { useState } from "react";
import "./Todolist.css";

const Todolist = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        const newTodoText = e.target.elements[0].value;
        if (newTodoText) {
            setTodos([...todos, { text: newTodoText, completed: false }]);
            e.target.reset();
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const handleEditTodo = (index) => {
        const newText = prompt("Edit your todo:", todos[index].text);
        if (newText) {
            const newTodos = todos.map((todo, i) =>
                i === index ? { ...todo, text: newText } : todo
            );
            setTodos(newTodos);
        }
    };

    const handleToggleTodoStatus = (index) => {
        const newTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };
    const handleDeleteAllTodos = () => {
        setTodos([]);
    };

    return (
        <div className="container">
            <h1>My Todo List</h1>
            <form onSubmit={handleAddTodo}>
                <input type="text" />
                <button type="submit">Add Todo</button>
                <button type="button" onClick={handleDeleteAllTodos}>
                    Delete All Todos
                </button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
                            {todo.text}
                        </span>
                        <button className="edit-button" onClick={() => handleEditTodo(index)}>
                            Edit
                        </button>
                        <button className="delete-button" onClick={() => handleDeleteTodo(index)}>
                            Delete
                        </button>
                        <button onClick={() => handleToggleTodoStatus(index)}>
                            Toggle Status
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todolist;
