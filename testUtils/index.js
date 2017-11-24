module.exports = {
  getWeather: location => `
    query {
      getWeather(location:"${location}") {
        location {
          city
          coordinates {
            lat
            long
          }
          country
          currentTime
          region
        }
        current {
          base {
            cloud
            code
            condition
            humidity
            icon
            isDay
            lastUpdated
            windCard
            windDeg
          }
          metric {
            feelsLike
            precip
            pres
            temp
            vis
            wind
          }
          standard {
            feelsLike
            precip
            pres
            temp
            vis
            wind
          }
        }
        forecast {
          base {
            code
            condition
            date
            humidity
            icon
            moonrise
            moonset
            sunrise
            sunset
            uvIndex
          }
          metric {
            avgTemp
            maxTemp
            maxWind
            minTemp
            precip
            vis
          }
          standard {
            avgTemp
            maxTemp
            maxWind
            minTemp
            precip
            vis
          }
        }
      }
    }
  `
}
