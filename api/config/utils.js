const isEnv = {
  dev: process.env.NODE_ENV === 'development',
  prod: process.env.NODE_ENV === 'production',
  test: process.env.NODE_ENV === 'test'
}

/**
 * @function parseForecastData
 * @description parses the retrieved API data into the
 * desired format.
 *
 * @param {Array.<Object>} arr
 * @returns {Array.<Object>} forecast data.
 */
const parseForecastData = arr =>
  arr.reduce((acc, o) => {
    let day = Object.create({})
    day = {
      base: {
        code: o.day.condition.code,
        condition: o.day.condition.text,
        date: o.date,
        humidity: o.day.avghumidity,
        icon: o.day.condition.icon,
        moonrise: o.astro.moonrise,
        moonset: o.astro.moonset,
        sunrise: o.astro.sunrise,
        sunset: o.astro.sunset,
        uvIndex: o.day.uv
      },
      metric: {
        avgTemp: o.day.avgtemp_c,
        maxTemp: o.day.maxtemp_c,
        maxWind: o.day.maxwind_kph,
        minTemp: o.day.mintemp_c,
        precip: o.day.totalprecip_mm,
        vis: o.day.avgvis_km
      },
      standard: {
        avgTemp: o.day.avgtemp_f,
        maxTemp: o.day.maxtemp_f,
        maxWind: o.day.maxwind_mph,
        minTemp: o.day.mintemp_f,
        precip: o.day.totalprecip_in,
        vis: o.day.avgvis_miles
      }
    }
    acc.push(day)
    return acc
  }, [])

/**
 * @function resCheck
 * @description handles non-200 res.status codes
 *
 * @param {Object} res
 * @param {String} q - user query
 *
 * @returns {Object} Error
 */
const resCheck = async (res, q) => {
  let message
  /* istanbul ignore else */
  if (res.status === 400) {
    const { error } = await res.json()
    if (error.code === 1003) {
      message =
        'Must provide a location! Accepted formats: airport code, city, (city, state), & zip code'
    }
    /* istanbul ignore else */
    if (error.code === 1006) {
      message = `No location found matching: ${q}`
    }
    throw new Error(message)
  }
}

module.exports = {
  isEnv,
  parseForecastData,
  resCheck
}
