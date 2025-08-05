
import { useState } from 'react';
import styles from './CheckGo.module.css'

const CheckGo = () => {
    const [isGoing, setIsGoing] = useState(false);

  const handleChange = () => {
    setIsGoing((prev) => !prev);
    // Acá después podrías guardar en backend o localStorage
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.container}>
        <input
          type="checkbox"
          checked={isGoing}
          onChange={handleChange}
          className={styles.checkbox}
        />
        <span className={styles.customCheckbox}></span>
        <span className={styles.labelText}>Sí, voy a ir</span>
      </label>

      {isGoing && (
        <p className={styles.confirmation}>¡Nos vemos ahí!</p>
      )}
    </div>
  )
}

export default CheckGo