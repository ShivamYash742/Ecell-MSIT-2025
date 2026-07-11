import React, { useState, useEffect, useRef } from "react";
import styles from "./Events.module.css";
import heroVideo from "./images/hero.mp4";
import eventsData from "../data/events.json";

const initialBoxes = eventsData.map((event, index) => ({
  id: event.id,
  title: event.title,
  description: event.detailedDescription || event.shortDescription,
  date: event.date,
  image: `/${event.images[0]}`,
  images: event.images.map((img) => `/${img}`),
  visitors: 150 + (index * 13),
}));

const galleryImages = eventsData.flatMap(event => event.images.map(img => `/${img}`));

const EventsPage = () => {
  const [boxes, setBoxes] = useState(initialBoxes);
  const [currentItem, setCurrentItem] = useState(3);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const dialogRef = useRef(null);
  
  const observerRef = useRef(null);

  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll(`.${styles.eventCard}`);
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  useEffect(() => {
    const fadeElements = document.querySelectorAll(`.${styles.eventCard}`);
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateUp);
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeElements.forEach((element) => observerRef.current.observe(element));
    
    return () => observerRef.current?.disconnect();
  }, [currentItem]);

  const handleLoadMore = () => {
    // In a real app, fetch more. Here we just cap it.
    setCurrentItem(prev => Math.min(prev + 3, boxes.length));
  };

  const openModal = (index) => {
    setSelectedEvent(index);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    if (dialogRef.current?.open) dialogRef.current.close();
  };

  useEffect(() => {
    if (selectedEvent !== null && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selectedEvent]);

  const handleEventHover = (index) => {
    const newBoxes = [...boxes];
    newBoxes[index].visitors += Math.floor(Math.random() * 3) + 1;
    setBoxes(newBoxes);
  };

  return (
    <div className={styles.page} onMouseMove={handleMouseMove}>
      
      {/* Hero Section */}
      <div className={styles.hero}>
        <video className={styles.heroVideo} autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>EVENTS</h1>
        </div>
      </div>

      {/* Events Grid */}
      <div className={styles.section}>
        <div className={styles.grid}>
          {boxes.slice(0, currentItem).map((box, index) => (
            <div 
              key={index}
              className={styles.eventCard}
              onMouseEnter={() => handleEventHover(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={box.image} alt={box.title} className={styles.eventImage} />
              <div className={styles.eventInfo}>
                <h3 className={styles.eventTitle}>{box.title}</h3>
                <div className={styles.eventMeta}>
                  <span>{box.date}</span>
                  <span>{box.visitors} Visitors</span>
                </div>

                <div className={styles.eventDesc} style={{ maxHeight: '4.8em' }}>
                  {box.description}
                </div>

                <button
                  type="button"
                  onClick={() => openModal(index)}
                  className={styles.toggleBtn}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {currentItem < boxes.length && (
          <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
            Load More Events
          </button>
        )}
      </div>

      {/* Gallery Section */}
      <div className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Events Gallery</h2>
        
        {/* Double array for seamless loop */}
        <div className={styles.galleryTrack}>
          {[...galleryImages, ...galleryImages].map((img, idx) => (
            <img key={`top-${idx}`} src={img} alt="Gallery" className={styles.galleryImg} />
          ))}
        </div>
        
        <div className={styles.galleryTrackReverse}>
          {[...galleryImages, ...galleryImages].reverse().map((img, idx) => (
            <img key={`bot-${idx}`} src={img} alt="Gallery" className={styles.galleryImg} />
          ))}
        </div>
      </div>

      {selectedEvent !== null && boxes[selectedEvent] && (
        <dialog
          ref={dialogRef}
          className={styles.modal}
          onClick={(e) => { if (e.target === dialogRef.current) closeModal(); }}
        >
          <div className={styles.modalContent}>
            <button type="button" className={styles.modalClose} onClick={closeModal} aria-label="Close">&times;</button>
            <div className={styles.modalImages}>
              {boxes[selectedEvent].images.map((img, i) => (
                <img key={i} src={img} alt={`${boxes[selectedEvent].title} ${i + 1}`} className={styles.modalImage} />
              ))}
            </div>
            <h2 className={styles.modalTitle}>{boxes[selectedEvent].title}</h2>
            <div className={styles.modalMeta}>
              <span>{boxes[selectedEvent].date}</span>
              <span>{boxes[selectedEvent].visitors} Visitors</span>
            </div>
            {/* ponytail: events.json is repo-owned (not user input). <br>/<b> tags trusted. */}
            <div
              className={styles.modalDesc}
              dangerouslySetInnerHTML={{ __html: boxes[selectedEvent].description }}
            />
          </div>
        </dialog>
      )}

    </div>
  );
};

export default EventsPage;
