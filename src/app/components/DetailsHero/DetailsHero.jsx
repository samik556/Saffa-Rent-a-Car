import React from 'react';
import Image from 'next/image';
import styles from './DetailsHero.module.css';

const DetailsHero = () => {
  return (
    <section className={styles.detailsHero}>
      <div className={styles.detailsHeroBg}>
        <Image
          src="/assets/Fleet/Audi.webp"
          alt="Toyota Land Cruiser Flagship Rental"
          fill
          priority
          className={styles.dHeroImg}
        />
        <div className={styles.detailsHeroOverlay}></div>
      </div>

      <div className={styles.detailsHeroContent}>
        <h1 className={styles.detailsTitle}>Premium Rental Details</h1>
        <p className={styles.detailsSubtitle}>Experience the ultimate comfort and luxury with our premium fleet.</p>
      </div>
    </section>
  );
};

export default DetailsHero;
