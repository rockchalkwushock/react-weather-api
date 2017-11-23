const npsUtils = require('nps-utils')

const { rimraf, concurrent, crossEnv, series } = npsUtils

module.exports = {
  scripts: {
    clean: series(rimraf('coverage')),
    commit: 'git cz',
    default: `${crossEnv('NODE_ENV=production')} nodemon index.js`,
    dev: `${crossEnv('NODE_ENV=development')} nodemon index.js`,
    lint: {
      default: 'eslint __tests__ api',
      fix: series.nps('lint --fix')
    },
    reportCoverage: 'codecov',
    test: {
      default: 'jest --runInBand --updateSnapshot',
      config: series.nps('test --showConfig'),
      coverage: series.nps('test --coverage --silent'),
      watch: series.nps('test --watch')
    },
    validate: {
      withCoverage: concurrent.nps('lint', 'test.coverage')
    }
  }
}
