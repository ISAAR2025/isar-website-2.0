import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/ContactForm.css";

export default function ContactRequest() {
  return (
    <section className="contact-request section-pastel" id="contact">
      <Container>
        <Row className="g-4">
          {/* Form column */}
          <Col lg={7}>
            <div className="glass-lite p-4 p-lg-5 h-100">
              <h2 className="h4 mb-3">Contact / Request Form</h2>
              <Form className="row g-3">
                <Col md={6}>
                  <Form.Label className="small text-muted">Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Col>
                <Col md={6}>
                  <Form.Label className="small text-muted">Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Col>
                <Col md={6}>
                  <Form.Label className="small text-muted">Phone</Form.Label>
                  <Form.Control type="tel" placeholder="Enter phone number" />
                </Col>
                <Col md={6}>
                  <Form.Label className="small text-muted">Enquiry For</Form.Label>
                  <Form.Select defaultValue="Institute">
                    <option>Institute</option>
                    <option>Services</option>
                    <option>Partnership</option>
                  </Form.Select>
                </Col>
                <Col xs={12}>
                  <Form.Label className="small text-muted">Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Briefly describe your request" />
                </Col>
                <Col xs={12} className="d-flex flex-wrap gap-2">
                  <Button variant="primary">Send Enquiry</Button>
                  <a href="tel:+91XXXXXXXXXX" className="btn btn-outline-secondary">Call Now</a>
                </Col>
              </Form>
            </div>
          </Col>

          {/* Map + address column */}
          <Col lg={5}>
            <div className="card border-0 shadow-sm h-100">
              <div className="map-wrap">
                {/* Replace src with your Google Maps embed URL */}
                <iframe
                  title="ISAR Location"
                  className="map-embed"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7647785791364!2d78.2306213!3d11.1308884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcb9ccc5f2cd5%3A0x2f9085eec7b057b5!2sINDIAN%20SCIENTIFIC%20AEROSPACE%20AND%20ROBOTICS!5e0!3m2!1sen!2sin!4v1748328076032!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title mb-2">Address & Contact</h5>
                <p className="mb-2 small text-muted">
                  339/2 at Kurunji Nagar Valayapatti, Mohanur,
                  Namakkal District, Tamil Nadu 637020
                </p>
                <ul className="list-unstyled small text-muted mb-0">
                  <li className="mb-1">• Email: admin@isaar.in</li>
                  <li className="mb-1">• Phone: +91 6374720788</li>
                  <li className="mb-0">• Hours: Mon–Sat, 10:00–18:00</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
