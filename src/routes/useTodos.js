import React from 'react'
import { useLocalStorage } from './useLocalStorage'

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', [])

  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter((todo) => todo.completed === true).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase()

      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    })
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    const newTodos = [...todos]

    newTodos[todoIndex].completed = true

    saveTodos(newTodos)
  }

  const getTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    return todos[todoIndex]
  }

  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    const newTodos = [...todos]

    newTodos[todoIndex].text = newText

    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const id = newTodoId(todos)
    const newTodos = [...todos]

    newTodos.push({
      completed: false,
      text: text,
      id,
    })

    saveTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    const newTodos = [...todos]

    newTodos.splice(todoIndex, 1)

    saveTodos(newTodos)
  }

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    sincronizeTodos,
    editTodo,
    getTodo,
  }
}

// generador de ids en javascript
function newTodoId(todoList) {
  if (!todoList.length) {
    return 1
  }

  const idList = todoList.map((todo) => todo.id)
  const idMax = Math.max(...idList) // funcion math que recibe varios argumentos y retorna el de mas valor entre ellos
  return idMax + 1
}

export { useTodos }
