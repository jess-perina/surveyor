import React from 'react'
import ReactDOM from 'react-dom'

const AlertModal = (props ) => {
  console.log(props)
  return ReactDOM.createPortal(
    <div>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h5>Do you really wnat to delete this survey?</h5>
          <p>This action cannot be undone</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">CANCEL</a>
          <a href="#!" className="modal-close waves-effect waves-red btn-flat" onClick={() => {}} >DELETE</a>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default AlertModal
