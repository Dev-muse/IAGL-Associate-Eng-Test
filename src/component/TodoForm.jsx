import React, { useState } from "react";
 

const TodoForm = () => {
  const [task, setTask] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(task=='' )return 
    if (task.trim()) {
      // dispatch action here
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
