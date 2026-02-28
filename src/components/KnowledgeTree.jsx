import React from 'react';
import TreeNode from './TreeNode';
import '../styles/KnowledgeTree.css';

const KnowledgeTree = ({ treeData, expandedNodes, onToggle, onAddChild, onCourseClick }) => {
  return (
    <div className="knowledge-tree">
      <TreeNode
        node={treeData}
        expandedNodes={expandedNodes}
        onToggle={onToggle}
        onAddChild={onAddChild}
        onCourseClick={onCourseClick}
      />
    </div>
  );
};

export default KnowledgeTree;
