const { Todo } = require('../models/todos.model')

// Utils
const { filterObj } = require('../utils/filterObj')

// GET all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      where: { status: 'active' }
    })
    res.status(200).json({
      status: 'success',
      data: {
        todos
      }
    })
  } catch (error) {
    console.log(error)
  }
}

// GET todo by ID
exports.getTodoByID = async (req, res) => {
  try {
    const { id } = req.params

    const todo = await Todo.findOne({
      where: { id: id, status: 'active' }
    })

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'No toDo found with the given ID'
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: {
        todo
      }
    })
  } catch (error) {
    console.log(error)
  }
}

// POST a todo
exports.createTodo = async (req, res) => {
  try {
    const { title, content } = req.body
    const newTodo = await Todo.create({
      title,
      content
    })

    res.status(201).json({
      status: 'success',
      data: { newTodo }
    })
  } catch (error) {
    console.log(error)
  }
}

// PATCH a todo
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params

    const data = filterObj(req.body, 'title', 'content')

    const todo = await Todo.findOne({
      where: { id: id, status: 'active' }
    })

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cannot update ToDo, invalid ID'
      })
      return
    }

    await todo.update({ ...data })

    res.status(200).json({ status: 'success', data: todo })
  } catch (error) {
    console.log(error)
  }
}

// Soft Delete Todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params

    const data = filterObj(req.body, 'status')

    const todo = await Todo.findOne({
      where: { id: id, status: 'active' }
    })

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cannot delete ToDo, invalid ID'
      })
      return
    }

    await todo.update({ status: 'deleted' })

    res.status(200).json({ status: 'success', data: todo })
  } catch (error) {
    console.log(error)
  }
}
