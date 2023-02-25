import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TodoForm.css'

function TodoForm(props) {
  const navigate = useNavigate()
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText)

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onCancel = () => {
    navigate('/home')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    props.submitEvent(newTodoValue)
    navigate('/home')
  }
  return (
    <form onSubmit={onSubmit}>
      <label>{props.label} TODO</label>
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
          {props.submitText}
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
