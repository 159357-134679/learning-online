import React from 'react';
import '../styles/KnowledgeTree.css';

const TreeNode = ({ node, expandedNodes, onToggle, onAddChild, onCourseClick }) => {
  const isExpanded = expandedNodes.has(node.id);
  const hasChildren = node.children && node.children.length > 0;
  const hasCourse = node.courseId;

  const handleNodeClick = () => {
    if (hasCourse && onCourseClick) {
      onCourseClick(node.courseId);
    } else if (hasChildren) {
      onToggle(node.id);
    }
  };

  return (
    <div className="tree-node">
      <div
        className={`node-header ${hasCourse ? 'clickable' : ''}`}
        onClick={handleNodeClick}
      >
        <span className="node-toggle">
          {hasChildren ? (isExpanded ? '▼' : '▶') : ' '}
        </span>
        <span className="node-title">{node.title}</span>
        {hasCourse && <span className="course-indicator">📚</span>}
        <button
          className="add-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAddChild(node.id);
          }}
        >
          +
        </button>
      </div>
      {isExpanded && hasChildren && (
        <div className="node-content">
          {node.children.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              expandedNodes={expandedNodes}
              onToggle={onToggle}
              onAddChild={onAddChild}
              onCourseClick={onCourseClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
