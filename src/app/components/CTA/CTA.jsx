import React from 'react';
import Image from 'next/image';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.ctaBanner} id="book-now">
      <div className={styles.ctaBannerBg}>
        <Image 
          src="/assets/Services/City to City.webp" 
          alt="Intercity Car Rental Service Pakistan"
          fill
          className={styles.ctaBannerImg} 
        />
        <div className={styles.ctaBannerOverlay}></div>
      </div>
      <div className={styles.ctaBannerContent}>
        <p className="section-eyebrow" style={{ color: 'var(--clr-accent)', marginBottom: '1rem' }}>Ready to Drive?</p>
        <h2 className={styles.ctaBannerTitle}>Need a car for your next trip?</h2>
        <p className={styles.ctaBannerText}>
          Choose from our premium fleet of sedans and SUVs. Available for daily, weekly, and monthly rentals with professional service.
        </p>
        <div className={styles.ctaBannerActions}>
          <a href="https://wa.me/923224901754" className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          <a href="tel:+923224901754" className="btn btn--primary">Call Now</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
