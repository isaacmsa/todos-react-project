import React from 'react'
import './TodoCounter.css'

function TodoCounter({ loading, completedTodos, totalTodos }) {
  return (
    <h2 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  )
}

export { TodoCounter }
