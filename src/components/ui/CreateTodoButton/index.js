import React from 'react'

import './CreateTodoButton.css'

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton" onClick={props.onClick}>
      {/* Si no usamos una arrow function el código se va a ejecutar de una, se tiene que envolver en una función para que se ejecute cuando sea necesario, en este caso cuando se de click. */}
      +
    </button>
  )
}

export { CreateTodoButton }
