import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Newsletter.css";

export default function NewsletterStrip() {
  return (
    <section className="newsletter-strip section-pastel" id="newsletter">
      <Container>
        <Row className="align-items-center g-3">
          <Col lg={8}>
            <p className="mb-0 invite-text">
              Get course updates, project news & offers
            </p>
          </Col>
          <Col lg={4} className="text-lg-end">
            <a href="/subscribe" className="btn btn-primary btn-lg">Subscribe</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
