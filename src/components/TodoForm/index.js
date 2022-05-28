import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const { addTodo, setOpenModal } = React.useContext(TodoContext)

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (newTodoValue.length <= 0) return

    addTodo(newTodoValue)
    setOpenModal(false)
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Agrega tu TODO"
      />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
