const fetch = require('isomorphic-fetch')

const { env, utils } = require('../config')

const { parseForecastData, resCheck } = utils

/**
 * @function weatherApi
 * @description asynchronous function for retrieving user specified
 * location weather data.
 *
 * @param {String} loc - '67202', 'Wichita', 'Wichita, KS', 'ICT'
 * @returns {Object} weather data for location
 */
async function weatherApi(loc) {
  const url = `${env.BASE_URL}/forecast.json?key=${env.API_KEY}&q=${loc}&days=7`
  try {
    const res = await fetch(url)
    if (res.status !== 200) {
      await resCheck(res, loc)
    }
    const { current, forecast, location } = await res.json()
    return {
      location: {
        city: location.name,
        coordinates: { lat: location.lat, long: location.lon },
        country: location.country,
        currentTime: location.localtime,
        region: location.region
      },
      current: {
        base: {
          cloud: current.cloud,
          code: current.condition.code,
          condition: current.condition.text,
          humidity: current.humidity,
          icon: current.condition.icon,
          isDay: current.is_day,
          lastUpdated: current.last_updated,
          windCard: current.wind_dir,
          windDeg: current.wind_degree
        },
        metric: {
          feelsLike: current.feelslike_c,
          precip: current.precip_mm,
          pres: current.pressure_mb,
          temp: current.temp_c,
          vis: current.vis_km,
          wind: current.wind_kph
        },
        standard: {
          feelsLike: current.feelslike_f,
          precip: current.precip_in,
          pres: current.pressure_in,
          temp: current.temp_f,
          vis: current.vis_miles,
          wind: current.wind_mph
        }
      },
      forecast: parseForecastData(forecast.forecastday)
    }
  } catch (err) {
    throw err
  }
}

module.exports = weatherApi
