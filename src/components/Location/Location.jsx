import React from 'react';
import styles from './Location.module.css';

const Location = () => {
  return (
    <div className={styles.locationContainer}>
      <h3 className={styles.title}>¿Dónde es?</h3>
      <div className={styles.mapWrapper}>
        <iframe
          title="Ubicación del evento"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.123456789012!2d-58.396511!3d-34.643494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca0e2df56a81%3A0xabcdef1234567890!2sEstadio%20Tom%C3%A1s%20Adolfo%20Duc%C3%B3!5e0!3m2!1ses!2sar!4v0000000000000"
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
