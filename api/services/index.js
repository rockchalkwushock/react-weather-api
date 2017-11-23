// const fetch = require('isomorphic-fetch')

// const { env } = require('../config')

// async function weatherApi(location) {
//   const url = `https://api.apixu.com/v1/forecast.json?key=${env.API_KEY}&q=${
//     location
//   }&days=7`
//   try {
//     const res = await fetch(url)
//     const data = await res.json()
//     /**
//      * 1. Need to parse data out for currentWeather
//      * 2. Need to parse data out for forecastedWeather
//      * 3. Under both keys add 2 objects "standard" & "metric"
//      * 4. Return object
//      *
//      * {
//      *  current: {
//      *    base: {},
//      *    metric: {},
//      *    standard: {}
//      *  },
//      *  forecast: {
//      *    base: {},
//      *    metric: [<Objects>], 7 weather objects in metric
//      *    standard: [<Objects>], 7 weather objects in standard
//      *  }
//      * }
//      */
//     return data
//   } catch (err) {
//     throw err
//   }
// }

// module.exports = weatherApi
