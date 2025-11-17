test('exercice-3: fetchAndFilterComments logs filtered count and first filtered email', async () => {
  const comments = [{ postId: 1, body: 'Nice', email: 'a@a' }, { postId: 2, body: 'X', email: 'b@b' }];
  const mockJson = jest.fn().mockResolvedValue(comments);
  global.fetch = jest.fn().mockResolvedValue({ json: mockJson });
  console.log = jest.fn();

  const { fetchComments, fetchAndFilterComments } = require('../03-fetchComments');
  await fetchAndFilterComments('http://example.com/comments');

  expect(global.fetch).toHaveBeenCalledWith('http://example.com/comments');
  expect(console.log).toHaveBeenCalledWith('Nombre de commentaires filtrés: 1');
  expect(console.log).toHaveBeenCalledWith('Email du premier commentaire filtré: a@a');
});
