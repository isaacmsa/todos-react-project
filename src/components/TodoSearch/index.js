import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
    // nota: react pide que el value del input debe estar conectado con el state,  es una convención de React, lo que llamamos “Componentes controlados”.
  )
}

export { TodoSearch }
