'use client';
import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: "Is a security deposit required?",
    a: "Yes, a minimal security deposit is required depending on the vehicle. It is fully refundable immediately upon the safe return of the car."
  },
  {
    q: "Can I take the rental car out of the city?",
    a: "Absolutely. You can travel anywhere within Pakistan. Please note that fuel and toll taxes are the responsibility of the renter."
  },
  {
    q: "Do you provide cars with drivers or self-drive only?",
    a: "We offer both options. You can choose to rent a vehicle for self-drive or hire one of our professional, background-checked chauffeurs."
  },
  {
    q: "What is your policy regarding accidents or damages?",
    a: "All our vehicles are fully insured. We do not charge for minor everyday scratches, but major damages will be subject to the standard insurance claim process."
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
