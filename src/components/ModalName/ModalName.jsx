import { useEffect ,useState } from 'react';
import styles from './ModalName.module.css';

const ALLOWED_NAMES = ['Sergio', 'Lucas', 'Daniela', 'Nahuel']; // modificala como quieras

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
    return ALLOWED_NAMES.some(
      (n) => n.toLowerCase() === inputName.trim().toLowerCase()
    );
  }

    const handleSubmit = () => {
    if (isNameAllowed(name)) {
      const matchedName = ALLOWED_NAMES.find(
        (n) => n.toLowerCase() === name.trim().toLowerCase()
      );

      localStorage.setItem('guestName', matchedName);
      onAccessGranted(matchedName);
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
            setIsAllowed(null); // resetear validación previa
          }}
        />
        <button onClick={handleSubmit}>Entrar</button>

        {isAllowed === false && (
          <p className={styles.error}>Nombre no autorizado 😢</p>
        )}
      </div>
    </div>
  );
}

export default ModalName