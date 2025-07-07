import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const handleToggle = () => {
    dispatch(updateTodo(todo.id, { completed: !todo.completed }));
  };

  const handleSave = () => {
    const updatedTask = inputRef.current.value.trim();
    if (updatedTask) {
      dispatch(updateTodo(todo.id, { task: updatedTask }));
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete task?")) {
      dispatch(deleteTodo(todo.id));
    }
  };

  return (
    <li className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        {isEditing ? (
          <input
            ref={inputRef}
            defaultValue={todo.task}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            autoFocus
          />
        ) : (
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.task}
          </span>
        )}
      </label>

      {isEditing ? (
        <div >
          <button className="todo-btn" onClick={handleSave}>💾</button>
          <button className="todo-btn" onClick={() => setIsEditing(false)}>❌</button>
        </div>
      ) : (
        <button className="todo-btn" onClick={() => setIsEditing(true)}>✏️</button>
      )}
      
      {!isEditing && (
        <button className="todo-btn" onClick={handleDelete}>🗑️</button>
      )}
    </li>
  );
};

export default Todo;
