let todoList = {
  todos: [
    {
      task: "This is a todo example",
      completed: false,
      id: crypto.randomUUID(),
    },
  ],
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),
  addTodo: (task) => {
    const newTodo = {
      id: crypto.randomUUID(),
      task,
      completed: false,
    };
    todoList.todos.push(newTodo);
    return Promise.resolve(newTodo);
  },
  deleteTodo: (id) => {
    const index = todoList.todos.findIndex((todo) => todo.id === id);
    if (index === -1) return Promise.reject(new Error("Todo not found"));
    const removed = todoList.todos.splice(index, 1);
    return Promise.resolve(removed[0]);
  },
  updateTodo: (id, updates) => {
    const todo = todoList.todos.find((todo) => todo.id === id);
    if (!todo) return Promise.reject(new Error("Todo not found"));
    // update task
    if (typeof updates.task === "string") todo.task = updates.task;
    //update checked status
    if (typeof updates.completed === "boolean") todo.completed = updates.completed;
    return Promise.resolve(todo);
  },
};
