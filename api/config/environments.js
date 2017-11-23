require('dotenv-safe').load()

const devConfig = {}

const testConfig = {}

const prodConfig = {
  SENTRY: process.env.SENTRY
}

const defaultConfig = {
  API_KEY: process.env.API_KEY,
  PORT: process.env.PORT || 3000
}

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig
    case 'test':
      return testConfig
    default:
      return prodConfig
  }
}

module.exports = {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
}
