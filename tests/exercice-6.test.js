test('exercice-6: fetchAndTransformPost fetches post and logs transformed object', async () => {
  const post = { id: 3, title: 'hello world', body: 'abc' };
  const mockJson = jest.fn().mockResolvedValue(post);
  global.fetch = jest.fn().mockResolvedValue({ json: mockJson });
  console.log = jest.fn();

  const { fetchPost, fetchAndTransformPost } = require('../06-fetchTransform');
  const transformed = await fetchAndTransformPost('http://example.com/posts/3');

  expect(global.fetch).toHaveBeenCalledWith('http://example.com/posts/3');
  expect(transformed).toEqual({ title: post.title.toUpperCase(), bodyLength: post.body.length, label: 'STATUT_OK' });
  expect(console.log).toHaveBeenCalledWith('Transformed post:', transformed);
});
