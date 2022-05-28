import React from 'react'
import { TodoContext } from '../components/TodoContext'
import { TodoCounter } from '../components/TodoCounter'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import { TodoSearch } from '../components/TodoSearch'
import { Modal } from '../components/Modal'
import { TodoForm } from '../components/TodoForm'
import { TodosError } from '../components/TodosError'
import { TodosLoading } from '../components/TodosLoading'
import { EmptyTodos } from '../components/EmptyTodos'

function AppUI() {
  // Etiqueta React.Fragment que sirve como wrapper para todo el componente, este es un tag invisible para evitar tantos divs

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error ? <TodosError /> : null}
        {loading
          ? new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)
          : null}
        {!loading && !searchedTodos.length ? <EmptyTodos /> : null}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            completed={todo.completed}
            text={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal ? (
        <Modal>
          <TodoForm />
        </Modal>
      ) : null}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  )
}

export { AppUI }
