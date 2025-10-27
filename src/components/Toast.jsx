import { useEffect } from 'react';
import styles from '../styles/toast.module.scss';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span>{message}</span>
      <button onClick={onClose} className={styles.closeBtn}>×</button>
    </div>
  );
};

export default Toast;
