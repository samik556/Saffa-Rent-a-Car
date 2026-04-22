"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.navHeader}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>▲</span>
          <span className={styles.logoText}>
            <span className={styles.brandAccent}>Saffa</span>
            <span className={styles.brandSuffix}>Rent a Car</span>
          </span>
        </Link>

        <nav className={styles.navLinks}>
          <Link href="/#services" className={`${styles.navLink} ${activeLink === 'services' ? styles.active : ''}`}>Services</Link>
          <Link href="/#our-process" className={`${styles.navLink} ${activeLink === 'our-process' ? styles.active : ''}`}>How It Works</Link>
          <Link href="/details" className={styles.navLink}>Our Fleet</Link>
          <Link href="/#book-now" className={`${styles.navLink} ${activeLink === 'book-now' ? styles.active : ''}`}>Book Now</Link>
        </nav>

        <div className={styles.navActions}>
          <a href="https://wa.me/923224901754" className="btn btn--whatsapp btn--small" target="_blank" rel="noopener noreferrer">
            <span>WhatsApp</span>
          </a>
          <a href="tel:+923224901754" className={styles.navCta}>Call Now</a>
        </div>

        <button 
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}>
        <Link href="/#services" className={styles.mobLink} onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="/#our-process" className={styles.mobLink} onClick={() => setIsOpen(false)}>How It Works</Link>
        <Link href="/details" className={styles.mobLink} onClick={() => setIsOpen(false)}>Our Fleet</Link>
        <Link href="/#book-now" className={styles.mobLink} onClick={() => setIsOpen(false)}>Book Now</Link>
        <a href="https://wa.me/923224901754" className={`${styles.mobLink} ${styles.mobLinkWa}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="tel:+923224901754" className={`${styles.mobLink} ${styles.mobLinkCta}`}>Call Now</a>
      </div>
    </header>
  );
};

export default Header;
