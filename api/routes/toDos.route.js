const express = require('express')

const {
  getAllTodos,
  createTodo,
  getTodoByID,
  updateTodo,
  deleteTodo
} = require('../controllers/todos.controller')

const router = express.Router()

router.get('/', getAllTodos)

router.get('/:id', getTodoByID)

router.post('/', createTodo)

router.patch('/:id', updateTodo)

router.delete('/:id', deleteTodo)

module.exports = { todosRouter: router }
