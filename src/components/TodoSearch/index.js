import React from 'react'
import './TodoSearch.css'

function TodoSearch({ loading, searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }
  return (
    <input
      className="TodoSearch"
      placeholder="todo"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
    // nota: react pide que el value del input debe estar conectado con el state,  es una convención de React, lo que llamamos “Componentes controlados”.
  )
}

export { TodoSearch }
