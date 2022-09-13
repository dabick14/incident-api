const Pool = require('pg').Pool
require('dotenv').config()

let poolOptions
if (process.env.NODE_ENV === 'production') {
  poolOptions = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
      rejectUnauthorized: false,
      ca: process.env.CA_CERT,
    },
  }
} else {
  poolOptions = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  }
}

const pool = new Pool(poolOptions)

module.exports = pool
