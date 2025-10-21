import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/AboutShort.css";
import aboutImg from "../assets/images/about-section1.png";

function RevealOnScroll({ children, className = "fade-up", rootMargin = "0px 0px -10% 0px", once = true, style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { root: null, rootMargin, threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, rootMargin]);
  return (
    <div ref={ref} className={`${className} ${visible ? "is-visible" : ""}`} style={style}>
      {children}
    </div>
  );
}

export default function AboutShort() {
  return (
    <section className="about-short section-pastel" id="about">
      <Container>
        <Row className="align-items-center flex-row-reverse">
          {/* RIGHT IMAGE */}
          <Col lg={6} className="d-flex justify-content-center align-items-center mb-4 mb-lg-0">
            <img src={aboutImg} alt="ISAR Labs and Training"  />
          </Col>
          {/* LEFT TEXT */}
          <Col lg={6} className="about-text-col">
            <div className="sub-title-round mb-3">About Us</div>
            <h3 className="about-title mb-3 text-black">
              ISAR advances innovation through hands‑on learning, research, and services in Drone Technology and 3D Printing—empowering careers
            </h3>
            <ul className="features-list mb-3">
              <li>Joint research and development projects.</li>
              <li>Customized training and certification programs.</li>
              <li>Industry‑academia knowledge sharing.</li>
              <li>Corporate upskilling workshops.</li>
            </ul>
            <RevealOnScroll style={{ transitionDelay: "300ms" }}>
              <div className="mt-2">
                <a href="/about" className="btn btn-primary btn-lg">
                  Learn More About ISAR
                </a>
              </div>
            </RevealOnScroll>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
