import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroImgWrap}>
        <Image 
          src="/assets/Fleet/Audi.webp"
          alt="Premium Land Cruiser Rental" 
          fill
          priority
          className={styles.heroImg} 
        />
        <div className={styles.heroOverlay}></div>
      </div>
      <div className={styles.heroContent}>
        <p className="section-eyebrow">Premium Car Rentals · Pakistan</p>
        <h1 className={styles.heroHeadline}>Rent Your<br />Perfect Ride.</h1>
        <p className={styles.heroSub}>
          From luxury SUVs to economy sedans. Available for daily, weekly, and
          monthly rentals with driver.
        </p>
        <a href="#fleet" className="btn btn--primary">Explore Vehicles</a>
      </div>
    </section>
  );
};

export default Hero;
