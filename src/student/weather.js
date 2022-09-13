const axios = require('axios')

const fetchWeatherUrlByCity = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`

const getWeather = async (city) => {
  const weatherUrl = fetchWeatherUrlByCity(city)

  try {
    const object = await axios.get(weatherUrl)
    return JSON.stringify(object.data)
  } catch (error) {
    if (error.response) {
      return {
        error: error.response?.data?.cod,
        message: error.response?.data?.message,
      }
    }
  }

  return object
}

module.exports = {
  getWeather,
}
