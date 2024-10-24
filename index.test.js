const SDK = require('./index')

test('it should fetch successfully', async () => {
  const response = await SDK.getPosts()

  expect(response).toBeTruthy()
})

test('it should throw a fetch error', async () => {
  const response = await SDK.getPosts('https://jsonplaceholder.typicode.commm/posts')

  expect(response).toBe('There was an error when fetching the API')
})
