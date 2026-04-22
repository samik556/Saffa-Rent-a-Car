import React from 'react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    num: "01",
    icon: "fa-comments",
    title: "Contact Us",
    desc: "Send us a WhatsApp message or give us a quick call. Tell us your date, destination, and vehicle preference."
  },
  {
    num: "02",
    icon: "fa-car-side",
    title: "Choose Your Vehicle",
    desc: "Select from our wide range of vehicles — standard cars, luxury cars, SUVs, Land Cruisers, vans, or coasters."
  },
  {
    num: "03",
    icon: "fa-calendar-check",
    title: "Confirm Booking",
    desc: "We confirm your booking instantly. You'll receive full details including driver info and pickup time."
  },
  {
    num: "04",
    icon: "fa-star",
    title: "Enjoy Your Ride",
    desc: "Your professional driver arrives on time. Sit back, relax, and enjoy a comfortable, safe journey."
  }
];

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks} id="our-process">
      <div className="section-header">
        <p className="section-eyebrow">Simple Process</p>
        <h2 className="section-title">Booking is <strong style={{color: 'var(--clr-accent)'}}>Quick & Easy</strong></h2>
        <p className="section-subtitle">
          Get your car with driver ready in just a few steps. No complicated forms — just fast, simple booking.
        </p>
      </div>
      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.stepNumber}>{step.num}</div>
            <div className={styles.stepIcon}><i className={`fa-solid ${step.icon}`}></i></div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
