const express = require('express')
const serverless = require('serverless-http')
const incidentRoutes = require('./src/student/incidentRoutes')
const app = express()
const PORT = 8080

require('dotenv').config()
app.use(express.json())

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
)

app.use('/api/v1/incident', incidentRoutes)

module.exports = app
module.exports.handler = serverless(app)
