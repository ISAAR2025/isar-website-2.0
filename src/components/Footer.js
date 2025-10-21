import '../styles/Footer.css';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import Logo from "../logo1.webp";
import footerBg from '../assets/images/footer-bg.webp';


const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const footerStyle = {
  backgroundImage: `url(${footerBg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  color: '#ffffff',
  marginTop: 'auto',
  padding: '60px 0 0',
};



  return (
    <footer className="footer" style={footerStyle}>
      <Container>
        {/* Main Footer Content */}
        <Row className="footer-main-row">
          {/* Column 1: Company Info & Social */}
          <Col xs={12} md={6} lg={4} className="footer-section company-info">
            <div className="company-logo">
              <div className="logo-container">
                <img src={Logo} alt="ISAR Logo" className="footer-logo" />
              </div>
            </div>
            <p className="company-description">
              At ISAR, we're dedicated to delivering innovative technology solutions 
              tailored to meet the unique needs of aerospace and robotics education. 
              Building the future through advanced UAV training and research.
            </p>
          
          </Col>

          {/* Column 2: Quick Links */}
          <Col xs={12} md={6} lg={3} className="footer-section quick-links">
            <h3>Quick Links</h3>
            <Row className="links-grid">
              {/* Sub-column 1 */}
              <Col xs={6} className="links-column">
                <ul>
                  <li><button onClick={() => handleNavigation('/')}>Home</button></li>
                  <li><button onClick={() => handleNavigation('/about')}>About</button></li>
                  <li><button onClick={() => handleNavigation('/institute')}>Our Institute</button></li>
                  <li><button onClick={() => handleNavigation('/services')}>Our Services</button></li>
                  <li><button onClick={() => handleNavigation('/gallery')}>Gallery</button></li>
                </ul>
              </Col>
              
              {/* Sub-column 2 */}
              <Col xs={6} className="links-column">
                <ul>
                  <li><button onClick={() => handleNavigation('/careers')}>Careers</button></li>
                  <li><button onClick={() => handleNavigation('/collaborate')}>Collaborate</button></li>
                  <li><button onClick={() => handleNavigation('/blog')}>Blog</button></li>
                  <li><button onClick={() => handleNavigation('/testimonials')}>Testimonials</button></li>
                  <li><button onClick={() => handleNavigation('/contact')}>Contact</button></li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Column 3: Programs & Services */}
          <Col xs={12} lg={5} className="footer-section services-links">
            <h3>Programs & Services</h3>
            <Row className="services-grid">
              <Col xs={12} sm={6} className="services-column">
                <ul>
                   <li><button onClick={() => handleNavigation('/services')}>3D printing Service (Business)</button></li>
                  <li><button onClick={() => handleNavigation('/collaborate')}>Master Certificate in Industry-Oriented Drone Applications</button></li>
                  <li><button onClick={() => handleNavigation('/blog')}>Professional Certificate in Unmanned Aerial Vehicle</button></li>
                  <li><button onClick={() => handleNavigation('/testimonials')}>Advance Certificate in Unmanned Aerial Vehicle</button></li>
                  <li><button onClick={() => handleNavigation('/testimonials')}>Certificate in Advance Drone Engineering</button></li>
                </ul>
              </Col>
              
              <Col xs={12} sm={6} className="services-column">
                <ul>
                  <li><button onClick={() => handleNavigation('/testimonials')}>Professional Certificate in CATIA & Solid Works</button></li>
                  <li><button onClick={() => handleNavigation('/testimonials')}>Advance Certificate in CFD & FEA Analysis</button></li>
                  <li><button onClick={() => handleNavigation('/testimonials')}>Professional Diploma in Unmanned Aerial Vehicle Maintenance and Production</button></li>
                  <li><button onClick={() => handleNavigation('/testimonials')}>Junior High</button></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        

        {/* Contact Information Row */}
<Row className="contact-row">
  <Col xs={12}>
    <h3>Contact Us</h3>
  </Col>

  <Col xs={12} md={3} className="contact-item d-flex align-items-center gap-2">
    <FaPhone className="contact-icon" />
    <a href="tel:+916374720788">+91-6374720788</a>
  </Col>

  <Col xs={12} md={3} className="contact-item d-flex align-items-center gap-2">
    <FaEnvelope className="contact-icon" />
    <a href="mailto:admin@isaar.in">admin@isaar.in</a>
  </Col>

  <Col xs={12} md={3} className="contact-item d-flex align-items-center gap-2 address">
    <FaMapMarkerAlt className="contact-icon" />
    <span>339/2 at Kurunji Nagar Valayapatti, Trichy Road, Namakkal, Tamil Nadu 637020</span>
  </Col>

  <Col xs={12} md={3} className="footer-social responsive-social d-flex gap-3 align-items-center">
    <a href="https://www.instagram.com/isar_drone_institute?igsh=MTR6OWFrd2V6dWs5Zw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FaInstagram />
    </a>
    <a href="https://www.linkedin.com/company/indian-scientific-aerospace-and-robotics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin />
    </a>
    <a href="https://www.facebook.com/share/16n143NgEy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <FaFacebook />
    </a>
  </Col>
</Row>



      </Container>

      {/* SEO Keywords Section */}
      <div className="seo-keywords">
        <Container>
          <Row>
            <Col xs={12}>
              <p>
                <strong>Services:</strong> Chennai Drone Training, Coimbatore UAV Courses, Madurai Aerospace Education, 
                Salem Robotics Institute, Tiruchirappalli Drone Academy, Vellore Aviation Training, 
                Tirunelveli Drone Certification, Erode UAV Workshop, Thoothukudi Aerospace Programs, 
                Thanjavur Drone Technology, Dindigul Aviation Courses, Cuddalore Robotics Training
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <p>&copy; {new Date().getFullYear()} Indian Scientific Aerospace and Robotics (ISAR). All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;