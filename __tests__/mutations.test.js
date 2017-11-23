const { graphql } = require('graphql')

const schema = require('../api/schema')
const mocks = require('../testUtils')

describe('GraphQL API Mutations', () => {
  test('1. Should return "Hello Turd Ferguson"', async () => {
    try {
      const { data } = await graphql(schema, mocks.postTest('Turd Ferguson'))
      expect.assertions(1)
      expect(data.postTest).toEqual('Hello Turd Ferguson')
    } catch (e) {
      throw e
    }
  })
})
