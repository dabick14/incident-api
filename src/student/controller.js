const pool = require('../../db')
const queries = require('./queries')
const { getWeather } = require('./weather')
const weather = require('./weather')

const addIncident = async (req, res) => {
  const { client_id, incident_desc, city, country } = req.body

  const weather = await getWeather(city)
  console.log(weather)

  if (weather.error) {
    res.status(404).send({ message: 'City not found' })
    return
  }
  //add student to database
  pool.query(
    queries.addIncident,
    [client_id, incident_desc, city, country, weather],
    (error, results) => {
      // console.log(results.rows.json)
      if (error) throw error
      res
        .status(201)
        .send({ msg: `Incident Created successfully`, data: results.rows })
      console.log('incident added')
    }
  )
}

const getIncidents = async (req, res) => {
  console.log('Getting students')
  pool.query(queries.getAllIncidents, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}
module.exports = {
  addIncident,
  getIncidents,
}
