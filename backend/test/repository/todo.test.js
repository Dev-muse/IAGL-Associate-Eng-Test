const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  it('should return the todo list with a default task', async () => {
    const actual = await repository.getTodos();

    expect(Array.isArray(actual.todos)).toBe(true);
    expect(actual.todos.length).toBeGreaterThan(0);

    const firstTodo = actual.todos[0];

    expect(firstTodo).toMatchObject({
      task: "This is a todo example",
      completed: false,
    });

    expect(typeof firstTodo.id).toBe('string');
  });
});
