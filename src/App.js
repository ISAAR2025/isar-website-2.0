import { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Institute from "./pages/Institute";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import BackToTopButton from "./components/BackToTopButton";
import "./styles/backToTop.css";
import CareersOverview from "./pages/CareersOverview";
import JobDetails from "./pages/JobDetails";
import CourseDetailsPage from "./pages/CourseDetailsPage";

import LoadingScreen from './components/LoadingScreen';

import TestimonialsPage from "./pages/TestimonialsPage";

const RouteLoader = () => (
  <div className="route-loading">
    <div className="route-spinner">
      <div className="spinner-ring"></div>
    </div>
    <p>Loading page...</p>
  </div>
);

function App() {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    document.title = "INDIAN SCIENTIFIC AEROSPACE AND ROBOTICS";
    AOS.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });

    const handleLoad = () => {
      setTimeout(() => {
        setAppLoading(false);
      }, 1500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (appLoading) {
    return <LoadingScreen loading={true} />;
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/institute" element={<Institute />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<CareersOverview />} />
            <Route path="/careers/:jobId" element={<JobDetails />} />
           <Route path="/courses/:id" element={<CourseDetailsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
          </Routes>
        </Suspense>
      </Router>
      <BackToTopButton showAfter={300} />
    </>
  );
}

export default App;