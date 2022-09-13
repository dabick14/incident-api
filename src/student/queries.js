const addStudent =
  'INSERT INTO students (name, age, dob, email) VALUES ($1, $2, $3, $4)'
const addIncident =
  'INSERT INTO incidents (client_id, incident_desc, city, country, weather_report) VALUES ($1, $2, $3, $4, $5) RETURNING client_id, incident_desc, city, country, date, weather_report'
const getAllIncidents = 'SELECT * FROM incidents ORDER BY id ASC'

module.exports = {
  addIncident,
  getAllIncidents,
}
