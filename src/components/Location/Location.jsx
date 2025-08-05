import React from 'react';
import styles from './Location.module.css';

const Location = () => {
  return (
    <div className={styles.locationContainer}>
      <h3 className={styles.title}>¿Dónde es?</h3>
      <div className={styles.mapWrapper}>
        <iframe
          title="Ubicación del evento"
          src="https://www.google.com/maps/embed?pb=!1m18!..."  // <-- reemplazá con tu link de ubicación real
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
