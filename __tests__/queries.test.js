const { graphql } = require('graphql')

const schema = require('../api/schema')
const mocks = require('../testUtils')

describe('GraphQL API Queries', () => {
  test('1. Should return "Hello World!"', async () => {
    try {
      const { data } = await graphql(schema, mocks.getTest)
      expect.assertions(1)
      expect(data.getTest).toEqual('Hello World!')
    } catch (e) {
      throw e
    }
  })
})
