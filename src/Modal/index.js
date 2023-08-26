import React from "react";
import ReactDOM from 'react-dom';
import cancelIcon from '../components/icons8-cancel.svg'
import './modal.css'

function Modal({ children, closeModal }) {
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                {children}
                <img className="cancel-icon" src={cancelIcon} alt="Cancel Icon" onClick={closeModal} />
            </div>
        </div>,
        document.getElementById('Modal')
    );
};
export { Modal }