/* eslint-disable no-console */
const express = require('express')
const { graphqlExpress } = require('apollo-server-express')

const { env, middlewares } = require('./config')
const { isEnv } = require('./config/utils')
const schema = require('./schema')

const app = express()

// Apply middlewares
middlewares(app)

// Create '/graphql' endpoint.
app.use(
  env.GRAPHQL_ENDPOINT,
  graphqlExpress({
    schema,
    debug: isEnv.dev
  })
)

app.listen(env.PORT, err => {
  if (err) console.error('Error', err)
  console.log(`
  GraphQL API Server running on:
    PORT: ${env.PORT}
    MODE: ${process.env.NODE_ENV}
  `)
})
