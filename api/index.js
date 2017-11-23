/* eslint-disable no-console */
const express = require('express')
const { graphqlExpress } = require('apollo-server-express')

const { env, middlewares } = require('./config')
const { isEnv } = require('./config/utils')
const schema = require('./schema')

const app = express()

// Apply middlewares
middlewares(app)

// Test route for Express Server
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

// Create '/graphql' endpoint.
app.use(
  '/graphql',
  graphqlExpress({
    schema,
    debug: isEnv.dev
  })
)

app.listen(env.PORT, err => {
  if (err) console.error('Error', err)
  console.log('App listening on port 3000!')
})
