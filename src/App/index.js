import React from 'react'
import { TodoProvider } from '../components/TodoContext'
import { AppUI } from './AppUI'

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Llorar con la l222lorona', completed: false },
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
