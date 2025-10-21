import { useState, useEffect } from "react";
import { Link,  useLocation  } from "react-router-dom";
import { BiEnvelope, BiPhone } from 'react-icons/bi';
import logo from "../logo1.webp";
import "../styles/global.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation(); // gives current path

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    
    // Fix mobile detection - should be for navbar collapse, not dropdown behavior
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Changed from 992 to 1024
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const closeNavbar = () => {
    setShowServicesDropdown(false);
    setIsNavbarOpen(false);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Check if current screen is desktop for hover behavior
  {/*const isDesktop = window.innerWidth >= 1024;*/}

  return (
    <>
      {/* Blue Top Bar with Tagline - Hidden on mobile */}
      <div className={`top-tagline-bar ${isMobile ? 'd-none' : ''}`}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-12 d-flex justify-content-between">
        <span className="tagline-text text-left">Indian Scientific Aerospace & Robotics</span>
        <span className="tagline-text text-right">
           <BiEnvelope /> admin@isaar &nbsp;&nbsp;
  <BiPhone /> +91-6374720788
        </span>
      </div>
    </div>
  </div>
</div>

      {/* Main Navigation Bar */}
      <nav className={`navbar navbar-expand-lg custom-navbar ${scrolled ? 'scrolled' : ''} ${isMobile ? 'mobile-nav' : ''}`}>
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <div className="d-flex align-items-center">
              <img src={logo} alt="ISAR Logo" className="navbar-logo me-2" />
              <div className="d-flex flex-column">
                <span className="isar-text">ISAR</span>
                
              </div>
            </div>
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/" onClick={closeNavbar}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about" onClick={closeNavbar}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/Institute" ? "active" : ""}`} to="/Institute" onClick={closeNavbar}>
                  Institute
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/services" ? "active" : ""}`} to="/services" onClick={closeNavbar}>
                  Services
                </Link>
              </li>
              {/* Services with Dropdown */}
              {/*
              <li className={`nav-item services-dropdown-container ${showServicesDropdown ? 'show' : ''}`}>
                <div className="services-wrapper">
                  <Link 
                    className={`nav-link ${location.pathname === "/services" ? "active" : ""}`} 
                    to="/services"
                    onMouseEnter={() => isDesktop && setShowServicesDropdown(true)}
                    onMouseLeave={() => isDesktop && setShowServicesDropdown(false)}
                    onClick={closeNavbar}
                  >
                    Services
                  </Link>
                  
                  <button 
                    className="dropdown-arrow-btn"
                    onMouseEnter={() => isDesktop && setShowServicesDropdown(true)}
                    onMouseLeave={() => isDesktop && setShowServicesDropdown(false)}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowServicesDropdown(!showServicesDropdown);
                    }}
                    aria-expanded={showServicesDropdown}
                  >
                    <span className={`dropdown-arrow ${showServicesDropdown ? 'rotated' : ''}`}>▼</span>
                  </button>
                  
                  <div 
                    className={`horizontal-dropdown-menu ${showServicesDropdown ? 'show' : ''}`}
                    onMouseEnter={() => isDesktop && setShowServicesDropdown(true)}
                    onMouseLeave={() => isDesktop && setShowServicesDropdown(false)}
                  >
                    <Link 
                      className={`dropdown-item ${location.pathname === "/services/drone-training" ? "active" : ""}`} 
                      to="/services/drone-training"
                      onClick={closeNavbar}
                    >
                      Drone Training
                    </Link>
                    <Link 
                      className={`dropdown-item ${location.pathname === "/services/3d-printing" ? "active" : ""}`} 
                      to="/services/3d-printing"
                      onClick={closeNavbar}
                    >
                      3D Printing Services
                    </Link>
                    <Link 
                      className={`dropdown-item ${location.pathname === "/services/aerospace-consulting" ? "active" : ""}`}
                      to="/services/aerospace-consulting"
                      onClick={closeNavbar}
                    >
                      Aerospace Consulting
                    </Link>
                    <Link 
                      className={`dropdown-item ${location.pathname === "/services/robotics-training" ? "active" : ""}`} 
                      to="/services/robotics-training"
                      onClick={closeNavbar}
                    >
                      Robotics Training
                    </Link>
                    <div className="dropdown-divider"></div>
                  </div>
                </div>
              </li>*/}

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/careers" ? "active" : ""}`}  to="/careers" onClick={closeNavbar}>
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/gallery" ? "active" : ""}`}  to="/gallery" onClick={closeNavbar}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}  to="/contact" onClick={closeNavbar}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;