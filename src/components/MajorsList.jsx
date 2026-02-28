import React from 'react';
import '../styles/MajorsList.css';

const MajorsList = ({ majors, onMajorSelect }) => {
    return (
        <div className="majors-list">
            {majors.length > 0 ? (
                majors.map((major) => (
                    <div
                        key={major.id}
                        className="major-item"
                        onClick={() => onMajorSelect(major)}
                    >
                        <div className="major-header">
                            <h3>{major.name}</h3>
                            {major.salary && <span className="salary-tag">{major.salary}</span>}
                        </div>
                        <p>{major.description}</p>
                    </div>
                ))
            ) : (
                <div className="empty-state">
                    <h3>未找到岗位</h3>
                    <p>请尝试其他搜索词或分类</p>
                </div>
            )}
        </div>
    );
};

export default MajorsList;
