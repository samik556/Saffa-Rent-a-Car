import React from 'react';
import Image from 'next/image';
import styles from './Fleet.module.css';

const fleetData = [
  { name: "Toyota Corolla", img: "/assets/Fleet/Toyota-Corolla.webp", badge: "Trending", seats: "5 Seater", badgeBg: "var(--clr-accent)" },
  { name: "Honda Civic", img: "/assets/Fleet/Honda Civic.webp", seats: "5 Seater" },
  { name: "Toyota Prado", img: "/assets/Fleet/Toyota Prado.webp", badge: "Most Popular", seats: "7 Seater", badgeBg: "#000" },
  { name: "Land Cruiser", img: "/assets/Fleet/Land Cruiser.webp", seats: "7 Seater" },
  { name: "Toyota Fortuner", img: "/assets/Fleet/Toyota Fortuner.webp", badge: "Top Choice", seats: "7 Seater", badgeBg: "var(--clr-accent)" },
  { name: "Audi", img: "/assets/Fleet/Audi.webp", seats: "5 Seater" },
  { name: "Range Rover", img: "/assets/Fleet/Range Rover.webp", badge: "VIP Luxury", seats: "5 Seater", badgeBg: "#111" },
  { name: "Mercedes", img: "/assets/Fleet/Mercedes.webp", seats: "5 Seater" },
  { name: "Toyota Coaster", img: "/assets/Fleet/Toyota Coaster.webp", seats: "22 to 30 Seats" },
  { name: "Toyota Hiace", img: "/assets/Fleet/Toyota Hiace.webp", seats: "13 to 17 Seats" },
  { name: "Kia Sportage", img: "/assets/Fleet/Kia Sportage.webp", seats: "5 Seater" },
  { name: "Suzuki Wagon R", img: "/assets/Fleet/Suzuki Wagon R.webp", seats: "5 Seater" },
  { name: "BMW", img: "/assets/Fleet/BMW.webp", badge: "Executive Choice", seats: "5 Seater", badgeBg: "#000" },
  { name: "Lemosine Car", img: "/assets/Fleet/Lemosine Car.webp", seats: "8 to 10 Seater" },
  { name: "Coaster & Buses", img: "/assets/Fleet/Bus.webp", seats: "55 to 70 Seats" }
];

const Fleet = ({ title = "Choose Your Vehicle", eyebrow = "OUR FLEET", limit }) => {
  const displayData = limit ? fleetData.slice(0, limit) : fleetData;

  return (
    <section className={styles.fleet} id="fleet">
      <div className={`${styles.sectionHeader} ${styles.vehicleHead}`}>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">From standard economy to luxury — we have the perfect vehicle for every occasion and budget.</p>
      </div>
      <div className={styles.fleetGrid}>
        {displayData.map((car, index) => (
          <article key={index} className={styles.carCard}>
            <div className={styles.cardImgWrap}>
              <Image
                src={car.img}
                alt={car.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.cardImg}
                priority={index < 3}
              />
              {car.badge && (
                <span className={styles.cardBadge} style={{ background: car.badgeBg || 'var(--clr-text)' }}>
                  {car.badge}
                </span>
              )}
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardName}>{car.name}</h3>
              <div className={styles.cardSpecsMini}>
                <span>👥 {car.seats}</span>
              </div>
              <div className={styles.cardContactActions}>
                <a href="https://wa.me/923224901754" className="btn btn--whatsapp btn--small" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a href="tel:+923224901754" className="btn btn--call btn--small">Call Now</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Fleet;
