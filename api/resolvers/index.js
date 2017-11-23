module.exports = {
  Mutation: {
    postTest: (parent, { name }) => `Hello ${name}`
  },
  Query: {
    getTest: () => 'Hello World!'
  }
}
