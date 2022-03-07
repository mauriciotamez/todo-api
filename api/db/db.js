const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  port: 5432,
  database: process.env.DB_NAME,
  dialect: 'postgres',
  logging: false
})

module.exports = { sequelize }
