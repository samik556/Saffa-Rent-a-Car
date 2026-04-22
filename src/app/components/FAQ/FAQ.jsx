'use client';
import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: "Can I rent a car for self-drive?",
    a: "No, Saffa Rent A Car exclusively provides chauffeur-driven services to ensure the highest standards of safety and comfort. We do not offer self-drive rentals."
  },
  {
    q: "Do you provide city-to-city travel?",
    a: "Yes, absolutely! While we are based in Lahore, we provide safe and reliable city-to-city transfers. You can book our professional drivers for travel from Lahore to any destination across Pakistan."
  },
  {
    q: "What types of vehicles are available in your fleet?",
    a: "We have a diverse fleet ranging from economy sedans like Corolla and Civic to luxury SUVs like Prado and Land Cruiser. We also provide large vehicles like Hiace, Coaster, and even Limousines for special occasions."
  },
  {
    q: "Are fuel and toll taxes included in the rates?",
    a: "Our standard rates cover the vehicle and the driver's service. Fuel, motorway tolls, and parking fees are typically the responsibility of the client, but we can provide all-inclusive packages upon request."
  },
  {
    q: "What services does Saffa Rent A Car offer?",
    a: "We offer premium transportation for airport pick-and-drop, wedding events, corporate travel, city tours, and long-distance journeys with professional, background-checked chauffeurs."
  },
  {
    q: "How do I make a booking?",
    a: "Booking is quick and easy. Simply contact us via WhatsApp or phone. We will confirm your vehicle and provide you with the driver's details and pickup time immediately."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className="section-header">
        <p className="section-eyebrow">Queries</p>
        <h2 className="section-title">Frequently Asked Questions</h2>
      </div>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <span className={styles.faqIcon}>
                  <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
                </span>
              </button>
              <div className={`${styles.faqAnswerWrapper} ${isOpen ? styles.open : ''}`}>
                <div className={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
