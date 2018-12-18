import React from 'react';
import ModalClasses from './Modal.css';
const Modal = (props) =>{
    const showClass = props.show?ModalClasses.ModalOpen:ModalClasses.ModalClosed;
    console.log("[class]",ModalClasses);
    return (
        <div className={[ModalClasses.Modal,showClass].join(' ')}>
            hello
        </div>
    );
}

export default Modal;