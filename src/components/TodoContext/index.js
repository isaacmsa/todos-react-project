import React from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('')

  const [openModal, setOpenModal] = React.useState(false)

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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)

    const newTodos = [...todos]

    newTodos[todoIndex].completed = true

    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos]

    newTodos.push({
      completed: false,
      text: text,
    })

    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)

    const newTodos = [...todos]

    newTodos.splice(todoIndex, 1)

    saveTodos(newTodos)
  }

  /* Ejecutar codigo antes de renderizar el componente*/
  // React.useEffect(() => {
  //   console.log('use effect')
  // }, [totalTodos])

  /* Sin segundo parametro: se ejecuta el useEffect cada vez que se rederiza el componente */
  /* [] array vacio: solo se renderiza la primera vez que se renderiza el componente */
  /* [variable] array con alguna variable: se ejecuta el useEffect cada vez que esa variable cambia */

  return (
    /* Provider se utliza para envolver toda la aplicacion */
    // todas las props que se quieran compartir, estaran en value
    <TodoContext.Provider
      value={{
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
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }

/* Consumer se utiliza en todas partes siempre que se necesite compartir el estado */
{
  /* <TodoContext.provider></TodoContext.provider> */
}
