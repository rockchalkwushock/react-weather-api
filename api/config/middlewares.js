const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const methodOverride = require('method-override')
const morgan = require('morgan')
const RateLimit = require('express-rate-limit')

const env = require('./environments')
const { isEnv } = require('./utils')

/* istanbul ignore next */
module.exports = app => {
  app.use(compression())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(helmet())
  app.use(cors(env.CORS))
  app.use(methodOverride())
  app.use(new RateLimit(env.LIMITER))
  if (isEnv.dev && !isEnv.test) {
    app.use(morgan('dev'))
  }
}
