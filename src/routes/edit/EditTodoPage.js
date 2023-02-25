import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { TodoForm } from '../../components/ui/TodoForm'
import { useTodos } from '../useTodos'

const EditTodoPage = () => {
  const location = useLocation() // hook de react-router-dom para extrer la informacion que se le pasa a una ruta como segundo parametro
  const params = useParams()
  const id = Number(params.id)

  const { loading, getTodo, editTodo } = useTodos()

  let todoText = ''

  if (location.state?.todo) {
    todoText = location.state.todo.text
  } else if (loading) {
    return <p>Cargando...</p>
  } else {
    const todo = getTodo(id)
    todoText = todo.text
  }
  return (
    <TodoForm
      label="Edita tu TODO"
      defaultTodoText={todoText}
      submitText="Editar"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  )
}

export { EditTodoPage }
