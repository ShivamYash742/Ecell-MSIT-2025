import React from "react";
import styles from "./Contact.module.css";

const ContactUs = () => {
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll(`.${styles.formSide}, .${styles.detailItem}`);
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    e.target.reset();
  };

  return (
    <div className={styles.page} onMouseMove={handleMouseMove}>
      <div className={styles.background} />
      
      <div className={styles.container}>
        {/* Info Side */}
        <div className={styles.infoSide}>
          <h1 className={styles.title}>Get in Touch</h1>
          <span className={styles.titleUnderline} />
          <p className={styles.subtitle}>
            Have questions about E-Cell, our incubation program, or upcoming events? 
            We'd love to hear from you. Drop us a message and our team will get back to you shortly.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className={styles.detailText}>
                <h4>Visit Us</h4>
                <p>Maharaja Surajmal Institute of Technology<br/>C-4 Janakpuri, New Delhi - 110059</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className={styles.detailText}>
                <h4>Email Us</h4>
                <p>ecell@msit.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className={styles.formSide}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                className={styles.textarea}
                placeholder="How can we help you?"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              Send Message
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
