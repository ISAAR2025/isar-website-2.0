import React from "react";
import { Container } from "react-bootstrap";
import "../styles/GalleryShort.css"; // Rename your CSS file accordingly

import g1 from "../assets/images/IMG_0033.webp";
import g2 from "../assets/images/g12.webp";
import g3 from "../assets/images/g11.webp";

const mediaItems = [
  { type: "image", src: g1, alt: "Training session 1" },
  { type: "image", src: g2, alt: "Flight practice" },
  { type: "image", src: g3, alt: "Lab workspace" }
];

function MasonryItem({ item }) {
  return (
    <div className="gallerymedia-fixed-item">
      <div className="gallerymedia-media-card">
        <img className="gallerymedia-media-content" src={item.src} alt={item.alt || "Gallery item"} />
      </div>
    </div>
  );
}

export default function GalleryMedia() {
  return (
    <section className="gallerymedia-media section-pastel" id="gallery">
      <Container>
     <div className="text-center align-items-center flex-wrap flex-direction-column">

                          <div className="sub-title-round">Gallery / Media</div>
                          <h3 className="main-title-dark">Training, labs, and printed partss</h3>
                            
                          
                          <p className="pararaph-small">
                            A visual look at hands‑on sessions, lab activities, and real‑world outcomes.
                          </p>
            </div>
        {/* Responsive, aligned grid gallery */}
        <div className="gallerymedia-fixed-row">
          {mediaItems.map((item, i) => (
            <MasonryItem key={i} item={item} />
          ))}
        </div>

        <div className="gallerymedia-mt-4 d-flex flex-wrap gap-2 justify-content-center">
          <a href="/gallery" className="btn btn-outline-secondary btn-lg">
            View Full Gallery
          </a>
          <a href="/contact#share" className="btn btn-primary btn-lg">
            Share Your Story
          </a>
        </div>
      </Container>
    </section>
  );
}