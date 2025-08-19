import { useEffect, useState } from 'react';
import styles from './ModalName.module.css';
import { userPhotoConfig } from '../../data/userPhotoConfig';

const ALLOWED_NAMES = Object.keys(userPhotoConfig); // ← usa las keys directamente

const ModalName = ({ onAccessGranted }) => {
  const [name, setName] = useState('');
  const [isAllowed, setIsAllowed] = useState(null);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const storedName = localStorage.getItem('guestName');
    if (storedName && isNameAllowed(storedName)) {
      onAccessGranted(storedName);
      setShowModal(false);
    }
  }, []);

  function isNameAllowed(inputName) {
    return ALLOWED_NAMES.includes(inputName.trim().toLowerCase());
  }

  const handleSubmit = () => {
    const normalized = name.trim().toLowerCase();

    if (isNameAllowed(normalized)) {
      localStorage.setItem('guestName', normalized);
      onAccessGranted(normalized); // ← siempre pasamos la key en minúscula
      setIsAllowed(true);
      setShowModal(false);
    } else {
      setIsAllowed(false);
    }
  };

  if (!showModal) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>¡Estás invitado!</h2>
        <p>Ingresá tu nombre para acceder</p>
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setIsAllowed(null);
          }}
        />
        <button onClick={handleSubmit}>Entrar</button>

        {isAllowed === false && (
          <p className={styles.error}>Nombre no autorizado 😢</p>
        )}
      </div>
    </div>
  );
};

export default ModalName;
