 

const TodoList = ({todos}) => {
 
  
   const toggleTodo = (todo) => {
    // toggle state
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.task}
            </span>
          </label>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>🗑️</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
