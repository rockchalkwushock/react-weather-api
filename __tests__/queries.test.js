const { graphql } = require('graphql')

const schema = require('../api/schema')
const mocks = require('../testUtils')

describe('GraphQL API Queries', () => {
  test('1. Should return data and not explode', async () => {
    try {
      const { data } = await graphql(schema, mocks.getWeather('67202'))
      expect.assertions(1)
      expect(data.getWeather).toBeDefined()
    } catch (e) {
      throw e
    }
  })
  test('2. Should return errors object with message for user on no input', async () => {
    try {
      const { data, errors } = await graphql(schema, mocks.getWeather(''))
      expect.assertions(3)
      expect(errors).toBeDefined()
      expect(errors[0]).toHaveProperty(
        'message',
        'Must provide a location! Accepted formats: airport code, city, (city, state), & zip code'
      )
      expect(data).toBeNull()
    } catch (e) {
      throw e
    }
  })
  test('3. Should return errors object with message for user on invalid input', async () => {
    try {
      const { data, errors } = await graphql(schema, mocks.getWeather('6'))
      expect.assertions(3)
      expect(errors).toBeDefined()
      expect(errors[0]).toHaveProperty(
        'message',
        'No location found matching: 6'
      )
      expect(data).toBeNull()
    } catch (e) {
      throw e
    }
  })
  test('4. Should return data object "airport code" input', async () => {
    try {
      const { data, errors } = await graphql(schema, mocks.getWeather('ICT'))
      expect.assertions(6)
      expect(data.getWeather).toBeDefined()
      expect(data.getWeather).toHaveProperty('current')
      expect(data.getWeather).toHaveProperty('forecast')
      expect(data.getWeather).toHaveProperty('location')
      expect(data.getWeather.location).toHaveProperty(
        'city',
        'Wichita Mid-Continent Airport'
      )
      expect(errors).toBeUndefined()
    } catch (e) {
      throw e
    }
  })
  test('5. Should return data object "city" input', async () => {
    try {
      const { data, errors } = await graphql(schema, mocks.getWeather('Moscow'))
      expect.assertions(6)
      expect(data.getWeather).toBeDefined()
      expect(data.getWeather).toHaveProperty('current')
      expect(data.getWeather).toHaveProperty('forecast')
      expect(data.getWeather).toHaveProperty('location')
      expect(data.getWeather.location).toHaveProperty('city', 'Moscow')
      expect(errors).toBeUndefined()
    } catch (e) {
      throw e
    }
  })
  test('6. Should return data object "city, state" input', async () => {
    try {
      const { data, errors } = await graphql(
        schema,
        mocks.getWeather('Springfield, Illinois')
      )
      expect.assertions(7)
      expect(data.getWeather).toBeDefined()
      expect(data.getWeather).toHaveProperty('current')
      expect(data.getWeather).toHaveProperty('forecast')
      expect(data.getWeather).toHaveProperty('location')
      expect(data.getWeather.location).toHaveProperty('city', 'Springfield')
      expect(data.getWeather.location).toHaveProperty('region', 'Illinois')
      expect(errors).toBeUndefined()
    } catch (e) {
      throw e
    }
  })
  test('7. Should return data object "zip code" input', async () => {
    try {
      const { data, errors } = await graphql(schema, mocks.getWeather('90210'))
      expect.assertions(6)
      expect(data.getWeather).toBeDefined()
      expect(data.getWeather).toHaveProperty('current')
      expect(data.getWeather).toHaveProperty('forecast')
      expect(data.getWeather).toHaveProperty('location')
      expect(data.getWeather.location).toHaveProperty('city', 'Beverly Hills')
      expect(errors).toBeUndefined()
    } catch (e) {
      throw e
    }
  })
})
