test('exercice-2: fetchPostAndAuthor should fetch post then user and log title and author', async () => {
  const post = { id: 1, userId: 42, title: 'Hello' };
  const user = { id: 42, name: 'Lea' };
  // mock fetch to return post when URL contains /posts and user when /users
  global.fetch = jest.fn((url) => {
    if (url.includes('/posts')) return Promise.resolve({ json: () => Promise.resolve(post) });
    return Promise.resolve({ json: () => Promise.resolve(user) });
  });

  console.log = jest.fn();
  // require after setting global.fetch so module top-level execution uses the mock
  const mod = require('../02-fetchPosts');
  // call the exported function explicitly and await its completion
  await mod.fetchPostAndAuthor('http://example.com/posts/1');

  // The function (or the module top-level run) should have triggered both fetch calls
  expect(global.fetch).toHaveBeenCalledWith('http://example.com/posts/1');
  expect(global.fetch).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
  expect(console.log).toHaveBeenCalledWith(`Titre du post : ${post.title}`);
  expect(console.log).toHaveBeenCalledWith(`Auteur : ${user.name}`);
});
