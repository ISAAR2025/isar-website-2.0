import React from "react";
import coursesData from "../data/coursesData";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaUserGraduate } from "react-icons/fa";
import "../styles/Institute.css";
import rocket from "../assets/images/rocket.webp";

const Institute = () => {
  const navigate = useNavigate();

  return (
    <div className="institute-page">
      {/* Banner */}
      <div className="institute-banner">
        <div className="banner-left-content">
          <h1>Courses</h1>
          <img src={rocket} alt="Rocket" className="rocket-decor" />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="institute-container">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="institute-card"
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <div className="course-image-wrapper">
              <img
                src={course.image}
                alt={course.title}
                className="institute-img"
              />
            </div>
            <div className="institute-details">
              <div className="course-meta">
                <span><FaBookOpen /> {course.lessons} Lessons</span>
                <span><FaUserGraduate /> {course.students} Students</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <button
                className="btn-enrol"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/courses/${course.id}`);
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Institute;