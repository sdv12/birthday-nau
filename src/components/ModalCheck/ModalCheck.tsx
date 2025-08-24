import React from 'react';
import './ModalCheck.css';

const ModalCheck = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¡Gracias por confirmar tu asistencia!</h2>
        <p>El menu es hamburguesas. Traer bebida</p>
        <p>
          Ante cualquier duda o posible inasistencia, me podés avisar por
          whatsApp o a la Negra. Muchas gracias nuevamente, te espero 🔵🔴
        </p>
        <button onClick={onClose} className="close-btn">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalCheck;
