import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import coursesData from "../data/coursesData";
import CoursesSidebar from "../components/CoursesSidebar";
import "./CourseDetailsPage.css";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const courseId = parseInt(id, 10);
  const navigate = useNavigate();

  const [activeCourseId, setActiveCourseId] = useState(courseId);
  const [isMobileView, setIsMobileView] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeCourse = coursesData.find((course) => course.id === activeCourseId);

  const onSelectCourse = (id) => {
    setActiveCourseId(id);
    setSidebarOpen(false); // close sidebar on selection in mobile
    navigate(`/course-details/${id}`);
  };

  if (!activeCourse) {
    return <p>Course not found</p>;
  }

  return (
    <div className="details-page-layout">
      {isMobileView && (
        <button
          className="sidebar-toggle-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Close Courses" : "Open Courses"}
        </button>
      )}

      {(sidebarOpen || !isMobileView) && (
        <aside className="sidebar">
          <CoursesSidebar
            courses={coursesData}
            activeId={activeCourseId}
            onSelect={onSelectCourse}
          />
        </aside>
      )}

      <main className="details-content">
        <h1 className="details-title animated-gradient">{activeCourse.title}</h1>
        <img
          src={activeCourse.image}
          alt={activeCourse.title}
          className="details-image"
          loading="lazy"
        />
        <div className="details-meta">
          <p><b>Duration:</b> {activeCourse.duration}</p>
          <p><b>Fee:</b> {activeCourse.fee}</p>
          <p><b>Eligibility:</b> {activeCourse.eligibility}</p>
          <p><b>Certification:</b> {activeCourse.certification}</p>
          <button className="enroll-btn">Enroll Now</button>
        </div>

        <section
          className="details-description"
          dangerouslySetInnerHTML={{ __html: activeCourse.description }}
        />
      </main>
    </div>
  );
};

export default CourseDetailsPage;
