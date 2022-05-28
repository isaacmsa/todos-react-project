import ReactDOM from 'react-dom'
import './Modal.css'
// Los portales en React sirven para teletransportar componentes a un nodo de HTML distinto al nodo principal de la aplicación.
function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById('modal')
  )
}

export { Modal }
