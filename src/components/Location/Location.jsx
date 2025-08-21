import React from 'react';
import styles from './Location.module.css';

const Location = () => {
  return (
    <div className={styles.locationContainer}>
      <h3 className={styles.title}>¿Dónde es?</h3>
      <div className={styles.mapWrapper}>
        <iframe
          title="Ubicación del evento"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8503418793935!2d-64.18152422369846!3d-31.418249174260993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a29bbf495279%3A0x862845f382ffaa9a!2sObispo%20Salguero%2065%2C%20X5000%20IAA%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1755776976347!5m2!1ses!2sar"          width="100%"
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
