const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/db')

const Todo = sequelize.define('todos', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'active'
  }
})

module.exports = { Todo }
