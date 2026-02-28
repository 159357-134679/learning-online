import React from 'react';
import '../styles/CategoryTags.css';

const CategoryTags = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="categories">
      <h2>专业分类</h2>
      <div className="category-tags">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-tag ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTags;
