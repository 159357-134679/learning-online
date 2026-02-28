import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchKeyword, setSearchKeyword, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="搜索专业..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onSearch()}
      />
      <button className="search-btn" onClick={onSearch}>
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
