const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const methodOverride = require('method-override')
const morgan = require('morgan')

const { isEnv } = require('./utils')

module.exports = app => {
  app.use(compression())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(helmet())
  app.use(cors())
  app.use(methodOverride())
  if (isEnv.dev && !isEnv.test) {
    app.use(morgan('dev'))
  }
}
