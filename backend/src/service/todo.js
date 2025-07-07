const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos();
    },
    addTodo: async (task) => {
      if (!task || typeof task !== "string") throw new Error("Invalid task");
      return repository.addTodo(task);
    },
    deleteTodo: async (id) => {
      if (!id) throw new Error("Missing ID");
      return repository.deleteTodo(id);
    },
    updateTodo: async (id, updates) => {
      if (!id) throw new Error("Missing ID");
      if (!updates) throw new Error("Missing updates");
      return repository.updateTodo(id, updates);
    },
  };
};

module.exports = todoService;
