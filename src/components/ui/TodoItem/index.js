import React from 'react'
import { BsCheck2All } from 'react-icons/bs'
import { TiDelete } from 'react-icons/ti'
import { EditIcon } from '../TodoIcon/EditIcon'
import './TodoItem.css'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <BsCheck2All />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <EditIcon onEdit={props.onEdit} />
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <TiDelete />
      </span>
    </li>
  )
}

export { TodoItem }
