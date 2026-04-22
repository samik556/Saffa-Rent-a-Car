import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseUs.module.css';

const features = [
  { icon: "👨‍✈️", title: "Professional Drivers", desc: "All our drivers are experienced, polite, and fully trained. Your safety is our top priority." },
  { icon: "⌚", title: "Always On Time", desc: "We track time carefully. Your driver will always be there before you even need to call." },
  { icon: "🧼", title: "Clean Vehicles", desc: "Every vehicle is cleaned and checked before each trip. Travel in comfort every time." },
  { icon: "💰", title: "Fair & Clear Prices", desc: "No hidden fees. You get a clear price before you book. No surprises." }
];

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUs} id="why-choose-us">
      <div className={styles.whyContainer}>
        <div className={styles.whyContent}>
          <div className={styles.sectionHeader}>
            <p className="section-eyebrow">Our Benefits</p>
            <h2 className="section-title">Why Choose Saffa Rent a Car</h2>
            <p className={styles.whyDesc}>
              We are not just another car rental. We are your trusted travel partner — focused on your comfort, safety, and satisfaction every single time.
            </p>
          </div>
          <div className={styles.whyFeaturesList}>
            {features.map((feature, index) => (
              <div key={index} className={styles.whyFeature}>
                <div className={styles.whyIcon}>{feature.icon}</div>
                <div className={styles.whyText}>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.whyImageWrap}>
          <Image
            src="/assets/why-us.webp"
            alt="Professional Chauffeur Service Saffa Rent a Car"
            fill
            sizes="(max-width: 992px) 100vw, 50vw"
            className={styles.whyImg}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
