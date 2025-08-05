import { useEffect, useState } from 'react';
import styles from './CountDown.module.css'

const targetDate = new Date('2025-08-29T21:00:00-03:00');

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }

    
    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');

    return { days, hours, minutes, seconds };
  }

    useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.countdown}>
      <span className={styles.unit}>{timeLeft.days}d</span>:
      <span className={styles.unit}>{timeLeft.hours}h</span>:
      <span className={styles.unit}>{timeLeft.minutes}m</span>:
      <span className={styles.unit}>{timeLeft.seconds}s</span>
    </div>
  );
}

export default CountDown