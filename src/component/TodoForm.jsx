import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const TodoForm = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = inputRef.current.value.trim();

    if (!task) return;

    dispatch(addTodo(task));
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input ref={inputRef} placeholder="Enter new task" />
      <button className="add-todo" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
