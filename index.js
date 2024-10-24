const SDK = {
  async getPosts(url = 'https://jsonplaceholder.typicode.com/posts') {
    try {
      const response = await fetch(url)
      const json = await response.json()
      return json
    } catch (error) {
      console.error(error)
      return 'There was an error when fetching the API'
    }
  }
}

module.exports = SDK
