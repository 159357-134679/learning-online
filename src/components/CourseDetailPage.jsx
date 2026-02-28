import React from 'react';
import { getCourseById } from '../data/courses';
import '../styles/CourseDetailPage.css';

const CourseDetailPage = ({ courseId, onBack }) => {
  const course = getCourseById(courseId);

  if (!course) {
    return (
      <div className="course-detail-page">
        <div className="page-header">
          <button className="back-btn" onClick={onBack}>
            ← 返回
          </button>
        </div>
        <div className="error-message">
          <h2>课程未找到</h2>
          <p>该课程ID不存在或已被删除</p>
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>
          ← 返回
        </button>
        <h1>{course.title}</h1>
      </div>

      <div className="course-content">
        <div className="course-info">
          <h2>课程介绍</h2>
          <p className="course-description">{course.description}</p>
        </div>

        <div className="resources-section">
          <h2>学习资源</h2>
          <div className="resources-list">
            {course.resources.map((resource) => (
              <div key={resource.id} className="resource-card">
                <div className="resource-header">
                  <div className="provider-badge">{resource.provider}</div>
                  <div className="type-badge">{resource.type}</div>
                </div>
                <h3 className="resource-name">{resource.name}</h3>
                <p className="resource-description">{resource.description}</p>
                <div className="resource-footer">
                  <span className="price-tag">{resource.price}</span>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    前往学习 →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
