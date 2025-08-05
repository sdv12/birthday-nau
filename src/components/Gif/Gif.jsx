import React from 'react';
import styles from './Gif.module.css';

const gifts = [
  { icon: '🟦', title: 'Camiseta de San Lorenzo' },
  { icon: '🎟️', title: 'Entradas para un partido' },
  { icon: '🍽️', title: 'Experiencia gastronómica' },
  { icon: '🎁', title: 'Merchandising' },
  { icon: '🧣', title: 'Bufanda del club' },
];

const Gif = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Regalos sugeridos</h3>
      <div className={styles.scrollContainer}>
        {gifts.map((gift, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{gift.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gif;
