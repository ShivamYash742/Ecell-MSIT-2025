import React from "react";
import styles from "./Services.module.css";

const services = [
  {
    title: "Personalised Mentorship",
    description: "One-on-one or group mentorship from experienced entrepreneurs and industry experts. Get guidance tailored to your specific needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Workshops & Seminars",
    description: "Regular workshops on business fundamentals like fundraising, marketing, and scaling. Learn from industry leaders.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Startup Funding",
    description: "Connect with VCs, angel investors, and crowdfunding platforms. Get access to pitching sessions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Incubation Support",
    description: "Access workspace, internet, and resources through our incubation partners. Develop your ideas in a supportive environment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Networking Opportunities",
    description: "Connect with investors, mentors, and peers at mixers, meetups, and demo days. Expand your professional network.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Competitions & Challenges",
    description: "Participate in pitch competitions, hackathons, and case study challenges. Showcase your ideas and win prizes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const Services = () => {
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div className={styles.page} onMouseMove={handleMouseMove}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <h1 className={`${styles.title} ${styles.animateUp}`} style={{ animationDelay: '0.1s' }}>
          Our Services
          <span className={styles.titleUnderline} />
        </h1>
        <p className={`${styles.subtitle} ${styles.animateUp}`} style={{ animationDelay: '0.3s' }}>
          Empowering entrepreneurs with the tools, mentorship, and resources they need to succeed.
        </p>
      </section>

      {/* Services Grid */}
      <section className={styles.section}>
        <div className={styles.grid}>
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`${styles.card} ${styles.animateUp}`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
