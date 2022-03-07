// Create server Express

// Define endpoint for ToDos
// GET fetch all ToDos
// POST Create new ToDo
// PATCH Update ToDo given an ID
// DELETE Delete ToDo given an ID (destroy or soft delete)

// Establish a connection with a Database (Postgress)

// Create ToDo model
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils)

// IMPORTANT: Prettier format

// Install cors library (npm i cors)
// app.use(cors())

const express = require('express')
const cors = require('cors')
const { sequelize } = require('./db/db')
const { todosRouter } = require('./routes/toDos.route')
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Endpoints
app.use('/api/v1/todos', todosRouter)

//DB Auth
sequelize
  .authenticate()
  .then(() => console.log('Database auth'))
  .catch((err) => console.log(err))

// DB Sync
sequelize
  .sync({ force: true })
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err))

app.listen(4000, () => {
  console.log('Express app running')
})
