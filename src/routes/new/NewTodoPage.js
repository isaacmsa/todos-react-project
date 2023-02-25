import React from 'react'
import { TodoForm } from '../../components/ui/TodoForm'
import { useTodos } from '../useTodos'

const NewTodoPage = () => {
  const { addTodo } = useTodos()
  return (
    <TodoForm
      label="Escribe tu nuevo todo"
      submitText="Añadir"
      submitEvent={(text) => addTodo(text)}
    />
  )
}

export { NewTodoPage }
