const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = require('../types/index.gql')
const resolvers = require('../resolvers')

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})
