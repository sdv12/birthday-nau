import React from 'react';
import styles from './Gif.module.css';

const gifts = [
  {  title: 'Indumentaria de San Lorenzo' },
  {  title: 'Entradas para un partido' },
  {  title: 'Experiencia gastronómica' },
  {  title: 'Ropa' },
  {  title: 'Vino' },
  {  title: 'Perfume' },
  {  title: 'Transferencia a sd.villegas.mp' },
];

const Gif = () => {
return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Regalos sugeridos</h3>
      <div className={styles.scrollContainer}>
        {gifts.map((gift, index) => (
          <div key={index} className={styles.card}>
            <span>{gift.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gif;
