import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import coursesData from "../data/coursesData";
import {
  FaBookOpen,
  FaUserGraduate,
  FaRegClock,
  FaGlobe,
  FaTag,
  FaChevronRight,
} from "react-icons/fa";
import "../styles/CourseDetailsPage.css";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find((c) => c.id === parseInt(id, 10));

  if (!course) return <p>Course not found!</p>;

  return (
    <div className="course-details-wrapper">
      {/* ===== HERO SECTION ===== */}
      <div className="course-hero">
        <div className="hero-overlay">
          <div className="breadcrumb">
            <span onClick={() => navigate("/")}>Home</span>
            <FaChevronRight className="breadcrumb-icon" />
            <span onClick={() => navigate("/courses")}>Courses</span>
            <FaChevronRight className="breadcrumb-icon" />
            <span className="active-page">{course.title}</span>
          </div>
          <h1 className="hero-title">{course.title}</h1>
        </div>
      </div>

      {/* ===== MAIN LAYOUT ===== */}
      <div className="course-layout">
        {/* Sidebar */}
        <aside className="course-sidebar">
          <h3>All Courses</h3>
          <ul>
            {coursesData.map((item) => (
              <li
                key={item.id}
                className={item.id === course.id ? "active" : ""}
                onClick={() => navigate(`/courses/${item.id}`)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="course-main">
          {/* Meta Info */}
          <div className="meta-card">
           
            <div className="meta-row">
              <FaBookOpen className="meta-icon" />
              <span>Lessons</span>
              <span className="meta-value">{course.lessons}</span>
            </div>
            <div className="meta-row">
              <FaUserGraduate className="meta-icon" />
              <span>Students</span>
              <span className="meta-value">{course.students}</span>
            </div>
            <div className="meta-row">
              <FaTag className="meta-icon" />
              <span>Certification</span>
              <span className="meta-value">{course.certification}</span>
            </div>
            <div className="meta-row">
              <FaGlobe className="meta-icon" />
              <span>Eligibility</span>
              <span className="meta-value">{course.eligibility}</span>
            </div>
             <div className="meta-row">
              <FaTag className="meta-icon" />
              <span>Fee</span>
              <span className="meta-value">{course.fee}</span>
            </div>
             <div className="meta-row">
              <FaRegClock className="meta-icon" />
              <span>Duration</span>
              <span className="meta-value">{course.duration}</span>
            </div>
          </div>

          {/* Description */}
          <div
            className="course-description-container"
            dangerouslySetInnerHTML={{ __html: course.description }}
          ></div>

          {/* Enroll Button */}
          <div className="enroll-btn-bottom-container">
            <button className="enroll-btn-bottom">Enroll Now</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CourseDetailsPage;