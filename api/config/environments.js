require('dotenv-safe').load()

const devConfig = {
  API_KEY: process.env.DEV_API_KEY
}

const testConfig = {
  API_KEY: process.env.DEV_API_KEY
}

const prodConfig = {
  API_KEY: process.env.PROD_API_KEY,
  CORS: {
    origin: process.env.CLIENT_ENDPOINTS,
    methods: 'GET'
  },
  GRAPHQL_ENDPOINT: process.env.ENDPOINT,
  LIMITER: {
    delayMs: parseInt(process.env.DELAY_MS, 10),
    max: parseInt(process.env.MAX, 10),
    windowMs: parseInt(process.env.WINDOW_MS, 10)
  }
}

const defaultConfig = {
  BASE_URL: 'https://api.apixu.com/v1',
  CORS: {
    origin: '*',
    methods: 'GET'
  },
  GRAPHQL_ENDPOINT: '/graphql',
  LIMITER: {
    delayMs: 0,
    max: 100,
    windowMs: 15 * 60 * 1000
  },
  PORT: process.env.PORT || 3000
}

function envConfig(env) {
  switch (env) {
    /* istanbul ignore next */
    case 'development':
      return devConfig
    case 'test':
      return testConfig
    /* istanbul ignore next */
    default:
      return prodConfig
  }
}

module.exports = {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
}
