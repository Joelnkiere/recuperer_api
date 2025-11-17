test('exercice-4: fetchAndListUsernames should fetch users and log usernames', async () => {
  const users = [{ username: 'alice' }, { username: 'bob' }];
  const mockJson = jest.fn().mockResolvedValue(users);
  global.fetch = jest.fn().mockResolvedValue({ json: mockJson });
  console.log = jest.fn();

  const { fetchUsers, fetchAndListUsernames } = require('../04-fetchUsernames');
  await fetchAndListUsernames('http://example.com/users');

  expect(global.fetch).toHaveBeenCalledWith('http://example.com/users');
  expect(console.log).toHaveBeenCalledWith('Usernames:', 'alice, bob');
});
