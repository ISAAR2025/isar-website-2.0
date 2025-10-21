import React from "react";
import { Container } from "react-bootstrap";
import "../styles/careersandintern.css";

export default function CareersInternships() {
  return (
    <section className="careers-internships section-white" id="careers-internships">
      <Container>
        <div className="careers-inner text-center mx-auto">
          <div className="sub-title-round">Careers</div>
          <h6 className="mt-4 mb-3 fw-semibold">Why join ISAR?</h6>
          <ul className="careers-list list-unstyled mb-3">
            <li>Work on cutting‑edge drone and 3D printing applications.</li>
            <li>Gain practical knowledge with live projects.</li>
            <li>Access to world‑class labs and learning resources.</li>
            <li>Opportunity to build a career in emerging tech industries.</li>
          </ul>
          <p className="careers-lead mb-4 mt-3">
            Apply for internships or explore career opportunities with ISAR today and be part of the innovation wave!
          </p>
          <div className="btn-row d-flex justify-content-center align-items-center flex-wrap gap-3 mb-2">
            <a href="/careers" className="btn btn-primary btn-lg">Explore Careers</a>
            
          </div>
        </div>
      </Container>
    </section>
  );
}
