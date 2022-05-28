import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './CreateTodoButton.css'

function CreateTodoButton() {
  const { setOpenModal } = useContext(TodoContext)

  const onClickButton = () => {
    setOpenModal((preState) => !preState)
  }
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      {/* Si no usamos una arrow function el código se va a ejecutar de una, se tiene que envolver en una función para que se ejecute cuando sea necesario, en este caso cuando se de click. */}
      +
    </button>
  )
}

export { CreateTodoButton }
