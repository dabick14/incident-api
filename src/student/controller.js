const pool = require('../../db')
const queries = require('./queries')
const { getWeather } = require('./weather')
const weather = require('./weather')

const addIncident = async (req, res) => {
  const { client_id, incident_desc, city, country } = req.body

  //get weather report
  const weather = await getWeather(city)

  if (weather.error) {
    res.status(weather.error).send({ message: weather.message })
    return
  }
  //add student to database
  const dbResponse = await insertData(
    client_id,
    incident_desc,
    city,
    country,
    weather
  )

  res.status(201).send({
    msg: `Incident Created successfully`,
    data: dbResponse,
  })
}

const insertData = async (client_id, incident_desc, city, country, weather) => {
  try {
    const result = await pool.query(queries.addIncident, [
      client_id,
      incident_desc,
      city,
      country,
      weather,
    ])
    pool.end()
    return result.rows
  } catch (error) {
    console.error('Error executing query', err.stack)
  }
}

const getIncidents = async (_req, res) => {
  try {
    const result = await pool.query(queries.getAllIncidents)
    pool.end()
    res.status(200).json(result.rows)
  } catch (error) {
    console.error('Error executing query', err.stack)
    res.status(500).json('Oops! Something went wrong')
  }
}
module.exports = {
  addIncident,
  getIncidents,
  insertData,
}
