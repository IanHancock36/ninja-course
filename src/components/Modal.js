import './Modal.css'
import ReactDom from 'react-dom'
export default function Modal({children,handleClose}) {
    return ReactDom.createPortal( (
        <div className="modal-backdrop">
            <div className='modal'>
            {children}
            <button onClick = {handleClose}>Close</button>
            </div>
            
        </div>
    ),document.body)
}
