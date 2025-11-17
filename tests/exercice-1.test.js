test('exercice-1: fetchAndCountUsers should call fetch and log total and first user', async () => {
  const users = [{ name: 'Alice' }, { name: 'Bob' }];
  const mockJson = jest.fn().mockResolvedValue(users);
  global.fetch = jest.fn().mockResolvedValue({ json: mockJson });
  console.log = jest.fn();

  const { fetchUsers, fetchAndCountUsers } = require('../01-fetchUsers');

  await fetchAndCountUsers('http://example.com/users');

  expect(global.fetch).toHaveBeenCalledWith('http://example.com/users');
  expect(console.log).toHaveBeenCalledWith(`Nombre total de users : ${users.length}`);
  expect(console.log).toHaveBeenCalledWith(`Premier user : ${users[0].name}`);
});
