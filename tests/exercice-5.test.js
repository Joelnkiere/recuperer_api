test('exercice-5: countCompletedTodos logs completed and not completed counts', async () => {
  const todos = [ { id:1, completed:false }, { id:2, completed:true }, { id:3, completed:false } ];
  const mockJson = jest.fn().mockResolvedValue(todos);
  global.fetch = jest.fn().mockResolvedValue({ json: mockJson });
  console.log = jest.fn();

  const { fetchTodos, countCompletedTodos } = require('../05-fetchTodos');
  await countCompletedTodos('http://example.com/todos');

  expect(global.fetch).toHaveBeenCalledWith('http://example.com/todos');
  expect(console.log).toHaveBeenCalledWith('Tâches complétées: 1');
  expect(console.log).toHaveBeenCalledWith('Tâches non complétées: 2');
});
