const weather = require('./weather')

test('weather should be returned by function', () => {
  expect(typeof weather.getWeather('Accra')).toBe('object')
})

// const object = await weather.getWeather()
// expect(object.name).toEqual('Dansoman')
