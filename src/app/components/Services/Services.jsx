import React from 'react';
import Image from 'next/image';
import styles from './Services.module.css';

const servicesData = [
  {
    title: "Within City Travel",
    desc: "Comfortable daily rides around the city for you and your family.",
    img: "/assets/Services/Within City Travel.webp"
  },
  {
    title: "City to City",
    desc: "Safe and relaxing long-distance journeys across cities.",
    img: "/assets/Services/City to City.webp"
  },
  {
    title: "Airport Pick & Drop",
    desc: "Punctual transfers to and from the airport. Never miss a flight.",
    img: "/assets/Services/Airport Pick & Drop by car.webp"
  },
  {
    title: "Wedding Transportation",
    desc: "Elegant cars to make your special day perfectly memorable.",
    img: "/assets/Services/Wedding Transportation.webp"
  },
  {
    title: "Corporate Rentals",
    desc: "Reliable transport solutions designed for your company.",
    img: "/assets/Services/Corporate Rentals.webp"
  },
  {
    title: "Business Travel",
    desc: "Quiet, smooth rides perfect for working efficiently on the go.",
    img: "/assets/Services/Business Travel.webp"
  }
];

const Services = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <div className="section-header">
        <p className="section-eyebrow">What We Offer</p>
        <h2 className="section-title">Our <strong style={{color: 'var(--clr-accent)'}}>Premium</strong> Services</h2>
        <p className="section-subtitle">Tailored transport solutions with professional chauffeurs for every occasion.</p>
      </div>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceImgWrap}>
              <Image 
                src={service.img} 
                alt={service.title} 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.serviceImg}
              />
            </div>
            <div className={styles.serviceBody}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
              <a href="tel:+923224901754" className={styles.serviceLink}>Book Now &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
