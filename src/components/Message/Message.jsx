import { useState } from 'react';
import styles from './Message.module.css';

export default function Message() {
  const [message, setMessage] = useState('');

  const handleSave = () => {
    // A futuro: guardar el mensaje en una API o localStorage
    console.log('Mensaje guardado:', message);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>DEJALE UN MENSAJE al GORREADO</h2>

      <textarea
        className={styles.textarea}
        placeholder="Dejale un mensaje al empleado del mes..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      />

      <button className={styles.button} onClick={handleSave}>
        Guardar
      </button>
    </div>
  );
}
