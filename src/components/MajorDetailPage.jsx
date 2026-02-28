import React, { useState } from 'react';
import KnowledgeTree from './KnowledgeTree';
import '../styles/MajorDetailPage.css';

const MajorDetailPage = ({ major, onBack }) => {
  const [treeData, setTreeData] = useState(major.knowledgeTree);
  const [expandedNodes, setExpandedNodes] = useState(new Set(['root']));

  const toggleNode = (nodeId) => {
    const newExpandedNodes = new Set(expandedNodes);
    if (newExpandedNodes.has(nodeId)) {
      newExpandedNodes.delete(nodeId);
    } else {
      newExpandedNodes.add(nodeId);
    }
    setExpandedNodes(newExpandedNodes);
  };

  const addChildNode = (parentId) => {
    const newTreeData = JSON.parse(JSON.stringify(treeData));

    const findAndAddChild = (node) => {
      if (node.id === parentId) {
        if (!node.children) {
          node.children = [];
        }
        const newChildId = `${parentId}-child-${Date.now()}`;
        node.children.push({
          id: newChildId,
          title: '新节点',
          children: []
        });
        return true;
      }
      if (node.children) {
        for (const child of node.children) {
          if (findAndAddChild(child)) {
            return true;
          }
        }
      }
      return false;
    };

    findAndAddChild(newTreeData);
    setTreeData(newTreeData);
    setExpandedNodes(new Set([...expandedNodes, parentId]));
  };

  return (
    <div className="major-detail-page">
      <div className="detail-header">
        <button className="back-btn" onClick={onBack}>
          ←
        </button>
        <div className="header-content">
          <h1>{major.name}</h1>
          {major.salary && <span className="salary-badge">{major.salary}</span>}
        </div>
      </div>

      <div className="detail-info">
        <p className="description">{major.description}</p>
      </div>

      <div className="knowledge-section">
        <h2>课程体系</h2>
        <KnowledgeTree
          treeData={treeData}
          expandedNodes={expandedNodes}
          onToggle={toggleNode}
          onAddChild={addChildNode}
        />
      </div>
    </div>
  );
};

export default MajorDetailPage;
