import { useState, useEffect } from "react";
import styles from './ClockStyles.module.css';

function Clock() {
  const [ctime, setTime] = useState(new Date().toLocaleTimeString([], { hour12: false }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour12: false }));
    }, 1000);

    return () => clearInterval(timer); // Cleanup khi component bị unmount
  }, []);

  return (
    <section className={styles.clockContainer}>
      <h1 className={styles.timeDisplay}>{ctime}</h1>
    </section>
  );
}

export default Clock;
