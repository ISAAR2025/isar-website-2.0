import React from "react";
import { Button } from "react-bootstrap";
import "../styles/hero.css";
import bgImage from "../assets/images/IMG_0033.webp"; 
 


function HomePage() {
  return (
    <section className="modern-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      
      <div className="hero-bg-overlay" />
      <div className="hero-content-wrapper">
        <h1 className="hero-headline">
          Shaping the Future of Technology
        </h1>
        <p className="hero-tagline">
          Training Talent & Delivering Innovation
        </p>
        <div className="hero-actions">
          <Button href="/Institute"   variant="primary" className="rounded-pill cta">
            
                  Explore Our Institute
            
          </Button>

          <Button   href="/Services" variant="outline-light" className="rounded-pill cta">
            View Our Services
          </Button>
          
        </div>
        <div className="visual-indicator">
          
        </div>
      </div>
    </section>
  );
}

export default HomePage;
