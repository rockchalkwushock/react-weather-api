const weatherApi = require('../services')

module.exports = {
  Query: {
    getWeather: async (parent, { location }) => {
      try {
        const data = await weatherApi(location)
        return data
      } catch (e) {
        throw e
      }
    }
  }
}
