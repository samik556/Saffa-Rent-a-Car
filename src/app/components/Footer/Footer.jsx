import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerInner}>
        <div>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>▲</span>
            <span className={styles.logoText}>
              <span className={styles.brandAccent}>Saffa</span>
              <span className={styles.brandSuffix}>Rent a Car</span>
            </span>
          </Link>
          <p className={styles.footerTagline}>Premium car rental services across Pakistan. Experience luxury, safety, and comfort on every journey.</p>
        </div>
        <div className={styles.footerContact}>
          <h5>Quick Links</h5>
          <Link href="/#services">Services</Link>
          <Link href="/#our-process">How It Works</Link>
          <Link href="/details">Our Fleet</Link>
          <Link href="/#book-now">Book Now</Link>
        </div>
        <div className={styles.footerContact}>
          <h5>Reach Out</h5>
          <a href="https://wa.me/923224901754" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
          <a href="tel:+923224901754">📞 0322 4901754</a>
          <a href="mailto:info@saffarentacar.com">📧 info@saffarentacar.com</a>
          <a href="#">📍 Lahore, Pakistan</a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2026 Saffa Rent a Car Pakistan. All rights reserved.</p>
        <p className={styles.developerInfo}>
          Designed and Developed by <a href="https://customwebsol.com" target="_blank" rel="noopener noreferrer">Custom Web Sol</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
