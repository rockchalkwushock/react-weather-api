// const weatherApi = require('../services')

module.exports = {
  Mutation: {
    postTest: (parent, { name }) => `Hello ${name}`
    // weatherRequest: async (parent, { location }) => {
    //   try {
    //     const data = await weatherApi(location)
    //     return data
    //   } catch (e) {
    //     throw e
    //   }
    // }
  },
  Query: {
    getTest: () => 'Hello World!'
  }
}
