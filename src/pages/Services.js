import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/services.css";
import Footer from "../components/Footer";

// Banner image
import bannerImg from "../assets/images/servicesbanner.webp";

// Step icons
import icContact from "../assets/icons/step1.webp";
import icUpload from "../assets/icons/step2.webp";
import icReview from "../assets/icons/step3.webp";
import icPrint from "../assets/icons/step4.webp";
import icQuality from "../assets/icons/step5.webp";
import icDelivery from "../assets/icons/step6.webp";

// Tech gallery images 
import imgAero from "../assets/images/imgser.webp";


// Printers
import pA1 from "../assets/images/3dprinting.webp";
import pP1S from "../assets/images/Bambu Lab P1S Combo.webp";
import pN4Max from "../assets/images/3d3.webp";
import pCentury from "../assets/images/Elegoo Century Carbon.webp";
import pSaturn4 from "../assets/images/Elegoo Saturn 4.webp";

// Materials (add your photos for each)
import imgPLA from "../assets/images/PLA.webp";
import imgABS from "../assets/images/ABS.webp";
import imgPETG from "../assets/images/PETG.webp";
import imgTPU from "../assets/images/TPU.webp";
import imgCF from "../assets/images/carbon fiber.webp";
import imgASA from "../assets/images/Asa.webp";
import imgNylon from "../assets/images/nylon.webp";
import imgPC from "../assets/images/pc.webp";
import imgPVA from "../assets/images/Pva.webp";

const Step = ({ icon, title, text, delay = 0 }) => (
  <div className="col-6 col-md-4 col-lg-2 d-flex align-items-stretch">
    <div className="step-card text-center w-100" data-aos="fade-up" data-aos-delay={delay}>
      <div className="step-icon-wrap ratio ratio-1x1">
        <img src={icon} alt={title} className="step-icon" />
      </div>
      <h6 className="mt-3 mb-1">{title}</h6>
      <p className="small text-muted mb-0">{text}</p>
    </div>
  </div>
);

const PrinterCard = ({ img, name, desc, type, delay = 0 }) => (
  <div className="five-col" data-aos="fade-up" data-aos-delay={delay}>
    <div className="card h-100 border-0 shadow-sm printer-card">
      <div className="ratio ratio-16x9">
        <img src={img} alt={name} className="img-cover rounded-top" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h5 className="card-title mb-0">{name}</h5>
          <span className={`badge ${type === "Resin" ? "text-bg-primary" : "text-bg-success"}`}>
            {type}
          </span>
        </div>
        <p className="card-text mb-0">{desc}</p>
      </div>
    </div>
  </div>
);

const MaterialCard = ({ img, title, subtitle, delay = 0 }) => (
  <div className="five-col" data-aos="fade-up" data-aos-delay={delay}>
    <div className="card h-100 border-0 shadow-sm material-card">
      <div className="ratio ratio-1x1">
        <img src={img} alt={title} className="img-cover rounded-top" />
      </div>
      <div className="card-body">
        <h6 className="mb-1">{title}</h6>
        <p className="small text-muted mb-0">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default function Services3DPrint() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: false,
      mirror: true,
      offset: 80,
    });
    const refreshOnLoad = () => AOS.refreshHard();
    window.addEventListener("load", refreshOnLoad);
    return () => window.removeEventListener("load", refreshOnLoad);
  }, []);

  return (
    <main className="services-3dp about-multicolor">
      {/* Banner */}
      <section className="section-gradient-blue border-bottom">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7" data-aos="fade-right">
              <h1 className="display-6 fw-semibold mb-3">3D Printing Services — From Prototype to Production</h1>
              <p className="lead text-muted mb-3">We print your vision.</p>
              <p className="mb-4">
                At ISAR 3D Print, we combine advanced 3D printing technology, expert knowledge, and a wide range of materials to deliver precision prints for every idea. Whether a student, startup, or established business, bring concepts to life faster, better, and smarter.
              </p>
              <div className="d-flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="120">
                <a href="#steps" className="btn btn-primary btn-lg">See How It Works</a>
                <a href="#printers" className="btn btn-outline-secondary btn-lg">Our Technology</a>
              </div>
            </div>
            <div className="col-lg-5" data-aos="zoom-in">
              <div className="ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm">
                <img src={bannerImg} alt="ISAR 3D printing — banner" className="img-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Steps */}
<section id="steps" className="section-steps">
  <div className="container">
    <div className="row justify-content-center mb-4" data-aos="fade-right">
      <div className="col-xl-10">
        <h2 className="h4 mb-2">Steps for 3D Printing Services</h2>
        <p className="text-muted mb-0">
          Simple, transparent, and reliable — your idea goes from file to finished product in just six easy steps.
        </p>
      </div>
    </div>
    <div className="steps-flow-wrap">
      {[
        {
          icon: icContact,
          title: "Step 1: Contact Us",
          text: "Share goals, timeline, and use-case.",
          delay: 0
        },
        {
          icon: icUpload,
          title: "Step 2: Submit Design",
          text: "Upload STL/OBJ/3MF or CAD.",
          delay: 60
        },
        {
          icon: icReview,
          title: "Step 3: Requirements Review",
          text: "We validate geometry & requirements.",
          delay: 120
        },
        {
          icon: icPrint,
          title: "Step 4: 3D Printing",
          text: "FDM/Resin print with tuned settings.",
          delay: 180
        },
        {
          icon: icQuality,
          title: "Step 5: Quality Check",
          text: "Visual, dimensional, functional QA.",
          delay: 240
        },
        {
          icon: icDelivery,
          title: "Step 6: Delivery",
          text: "Pick-up, ship, or local drop.",
          delay: 300
        }
      ].map((step, i, arr) => (
         <React.Fragment key={i}>
      <div className="step-card-flow" data-aos="fade-up" data-aos-delay={step.delay}>
        <div className="step-icon-flow">
          <img src={step.icon} alt={step.title} />
        </div>
        <h6 className="mt-3 mb-1 text-center">{step.title}</h6>
        <p className="small text-muted mb-0 text-center">{step.text}</p>
      </div>
      {/* Arrow right between 1-2, 2-3, 4-5, 5-6;
          Down arrow at end of first row (after 3) and at end of fourth step (after 6), not needed */}
      {(i % 3 !== 2 && i !== arr.length - 1) && (
        <div className="step-arrow-wrap">
          <span className="step-arrow" aria-hidden="true">→</span>
        </div>
      )}
      {/* After card 3, show a down arrow to next row */}
      {(i === 2 || i === 5) && i !== arr.length - 1 && (
        <div className="step-arrow-wrap vertical-arrow">
          <span className="step-arrow" aria-hidden="true">↓</span>
        </div>
      )}
    </React.Fragment>
      ))}
    </div>
  </div>
</section>


      {/* Technology */}
      <section className="section-white">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="h4 mb-2">Our 3D Printing Technology</h2>
              <p className="mb-3">
                We use industry‑leading printers to deliver high‑quality, reliable results for everything from rapid prototypes to final products. A mix of FDM and resin printers allows us to handle large‑scale prototypes and ultra‑detailed miniatures alike.
              </p>
              <div className="row g-3">
                <div className="col-12 col-sm-6" data-aos="fade-up">
                  <div className="mini-feature">
                    <div className="icon-dot" /> FDM: Bambu A1 Combo, P1S Combo, Neptune 4 Max, Century Carbon
                  </div>
                </div>
                <div className="col-12 col-sm-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="mini-feature">
                    <div className="icon-dot" /> Resin: Elegoo Saturn 4
                  </div>
                </div>
              </div>
            </div>
            {/* Show only one image here */}
            <div className="col-lg-6" data-aos="zoom-in">
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm">
                <img src={imgAero} alt="Aerospace prototype" className="img-cover" />
              </div>
            </div>
          </div>
          {/* Printers */}
          <div id="printers" className="five-grid mt-1">
            <PrinterCard img={pA1} name="Bambu Lab A1 Combo" desc="High‑speed, multi‑color printing for detailed models." type="FDM" delay={0} />
            <PrinterCard img={pP1S} name="Bambu Lab P1S Combo" desc="Advanced precision and speed for production‑grade parts." type="FDM" delay={80} />
            <PrinterCard img={pN4Max} name="Elegoo Neptune 4 Max" desc="Large‑format FDM printing for big designs and enclosures." type="FDM" delay={160} />
            <PrinterCard img={pCentury} name="Elegoo Century Carbon" desc="Strong, durable, high‑accuracy prints with robust frames." type="FDM" delay={240} />
            <PrinterCard img={pSaturn4} name="Elegoo Saturn 4" desc="High‑resolution resin printing for smooth, detailed parts." type="Resin" delay={320} />
          </div>
        </div>
      </section>

      {/* Materials with images */}
      <section className="section-blue">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-right">
            <div className="col-xl-10">
              <h2 className="h4 mb-2">Materials We Use</h2>
              <p className="text-muted mb-3">
                Better quality, more material options, and reliable results tailored to your needs.
              </p>
            </div>
          </div>
          <div className="five-grid">
            <MaterialCard img={imgPLA}   title="PLA"                   subtitle="Eco‑friendly, rigid, affordable" delay={0} />
            <MaterialCard img={imgABS}   title="ABS"                   subtitle="Strong, impact‑resistant, heat tolerant" delay={60} />
            <MaterialCard img={imgPETG}  title="PETG"                  subtitle="Durable, reliable for mechanical parts" delay={120} />
            <MaterialCard img={imgTPU}   title="TPU"                   subtitle="Flexible, elastic, shock‑absorbing" delay={180} />
            <MaterialCard img={imgCF}    title="Carbon Fiber"          subtitle="Lightweight, ultra‑strong" delay={240} />
            <MaterialCard img={imgASA}   title="ASA"                   subtitle="UV & weather resistant (outdoor)" delay={300} />
            <MaterialCard img={imgNylon} title="Nylon"                 subtitle="Tough, abrasion & chemical resistant" delay={360} />
            <MaterialCard img={imgPC}    title="PC (Polycarbonate)"    subtitle="Transparent, heat & impact resistant" delay={420} />
            <MaterialCard img={imgPVA}   title="PVA (Support)"         subtitle="Water‑soluble, biodegradable supports" delay={480} />
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-sand">
        <div className="container" data-aos="fade-up">
          <div className="p-4 p-lg-5 bg-white rounded-3 shadow-sm">
            <h2 className="h4 mb-3">Why Choose ISAR 3D Print?</h2>
            <ul className="list-unstyled mb-0 why-list">
              <li>Fast Turnaround — from idea to prototype in days.</li>
              <li>High Precision — every detail captured with accuracy.</li>
              <li>Custom Solutions — tailored to unique industry needs.</li>
              <li>Affordable Prototyping — reduce cost, improve efficiency.</li>
              <li>All Industries Covered — from aerospace to art.</li>
            </ul>
            <div className="mt-4">
              <a href="/contact" className="btn btn-primary btn-lg">Request a Quote</a>
            </div>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </section>
    </main>
  );
}
