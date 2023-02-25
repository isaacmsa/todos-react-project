import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTodos } from '../useTodos'
import { TodoHeader } from '../../components/ui/TodoHeader'
import { TodoCounter } from '../../components/ui/TodoCounter'
import { CreateTodoButton } from '../../components/ui/CreateTodoButton'
import { TodoItem } from '../../components/ui/TodoItem'
import { TodoList } from '../../components/ui/TodoList'
import { TodoSearch } from '../../components/ui/TodoSearch'
import { Modal } from '../../components/ui/Modal'
import { TodoForm } from '../../components/ui/TodoForm'
import { TodosError } from '../../components/ui/TodosError'
import { TodosLoading } from '../../components/ui/TodosLoading'
import { EmptyTodos } from '../../components/ui/EmptyTodos'
import { ChangeAlertWithStorageListener } from '../../components/ui/ChangeAlert'

function HomePage() {
  const navigate = useNavigate()

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    // openModal,
    // setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    // addTodo,
    sincronizeTodos,
  } = useTodos()

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para: {searchText}</p>
        )}
        // render={(todo) => (
        //   <TodoItem
        //     key={todo.text}
        //     completed={todo.completed}
        //     text={todo.text}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            completed={todo.completed}
            text={todo.text}
            onEdit={() => {
              navigate('/edit/' + todo.id, {
                state: { todo },
              })
            }}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      {/* {openModal ? (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      ) : null} */}
      <CreateTodoButton
        onClick={() => navigate('/new')}
        // setOpenModal={setOpenModal}
      />

      <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
    </React.Fragment>
  )
}

export { HomePage }
