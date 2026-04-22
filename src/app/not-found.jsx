import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <div className={styles.carIcon}>
          <i className="fa-solid fa-car-side fa-bounce"></i>
        </div>
        <h2 className={styles.title}>Oops! You've Driven Off Course</h2>
        <p className={styles.text}>
          The page you are looking for has been moved or doesn't exist. 
          Let's get you back on the right track.
        </p>
        <Link href="/" className="btn btn--primary">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
