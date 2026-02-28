import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AICareerPage from './components/AICareerPage';
import CategoryDetailPage from './components/CategoryDetailPage';
import CourseDetailPage from './components/CourseDetailPage';
import './styles/global.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category.id === 'ai') {
      setCurrentPage('ai-career');
    } else {
      setCurrentPage('category-detail');
    }
  };

  const handleCareerSelect = (category, careerId) => {
    setSelectedCategory(category);
    setSelectedCareer(careerId);
    if (category.id === 'ai') {
      setCurrentPage('ai-career');
    } else {
      setCurrentPage('category-detail');
    }
  };

  const handleBack = () => {
    setCurrentPage('home');
    setSelectedCategory(null);
    setSelectedCourse(null);
    setSelectedCareer(null);
  };

  const handleCourseSelect = (courseId) => {
    setSelectedCourse(courseId);
    setCurrentPage('course-detail');
  };

  return (
    <div className="app">
      {currentPage === 'home' && (
        <HomePage
          onCategorySelect={handleCategorySelect}
          onCareerSelect={handleCareerSelect}
        />
      )}

      {currentPage === 'ai-career' && (
        <AICareerPage
          onBack={handleBack}
          onCourseSelect={handleCourseSelect}
          selectedCareer={selectedCareer}
        />
      )}

      {currentPage === 'category-detail' && selectedCategory && (
        <CategoryDetailPage
          category={selectedCategory}
          onBack={handleBack}
          onCourseSelect={handleCourseSelect}
          selectedCareer={selectedCareer}
        />
      )}

      {currentPage === 'course-detail' && selectedCourse && (
        <CourseDetailPage
          courseId={selectedCourse}
          onBack={() => {
            if (selectedCategory && selectedCategory.id === 'ai') {
              setCurrentPage('ai-career');
            } else {
              setCurrentPage('category-detail');
            }
            setSelectedCourse(null);
          }}
        />
      )}
    </div>
  );
};

export default App;
