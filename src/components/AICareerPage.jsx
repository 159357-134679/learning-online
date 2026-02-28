import React, { useState, useEffect } from 'react';
import KnowledgeTree from './KnowledgeTree';
import { aiCommonKnowledge, aiCareerDirections } from '../data/aiCareerData';
import '../styles/AICareerPage.css';

const AICareerPage = ({ onBack, onCourseSelect, selectedCareer: propsSelectedCareer }) => {
  const [activeTab, setActiveTab] = useState('common');
  const [selectedCareer, setSelectedCareer] = useState(null);

  // 当从搜索结果进入时，自动切换到职业选择标签
  useEffect(() => {
    if (propsSelectedCareer) {
      setActiveTab('career');
      // 找到对应的职业数据
      const career = aiCareerDirections.find(c => c.id === propsSelectedCareer);
      if (career) {
        setSelectedCareer(career);
      }
    }
  }, [propsSelectedCareer]);

  // 返回按钮处理
  const handleBack = () => {
    if (selectedCareer) {
      // 如果当前在岗位技能树页面，返回到职业选择列表
      setSelectedCareer(null);
    } else {
      // 如果当前在标签页，返回首页
      onBack();
    }
  };

  return (
    <div className="ai-career-page">
      <div className="page-header">
        <button className="back-btn" onClick={handleBack}>
          ← 返回
        </button>
        <h1>人工智能</h1>
      </div>

      {/* 顶部标签 - 始终显示 */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === 'common' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('common');
            setSelectedCareer(null);
          }}
        >
          AI通用体系
        </button>
        <button
          className={`tab ${activeTab === 'career' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('career');
            setSelectedCareer(null);
          }}
        >
          职业选择
        </button>
      </div>

      {/* 内容区域 - 整个屏幕显示 */}
      <div className="content-area">
        {activeTab === 'common' && (
          <div className="common-knowledge-section">
            <KnowledgeTree
              treeData={aiCommonKnowledge}
              expandedNodes={new Set(['ai-common'])}
              onToggle={() => { }}
              onAddChild={() => { }}
            />
          </div>
        )}

        {activeTab === 'career' && !selectedCareer && (
          <div className="career-list-section">
            {aiCareerDirections.map((career) => (
              <div
                key={career.id}
                className="career-card"
                onClick={() => setSelectedCareer(career)}
              >
                <div className="career-icon">{career.icon}</div>
                <div className="career-info">
                  <h3>{career.name}</h3>
                  <p className="career-description">{career.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'career' && selectedCareer && (
          <div className="career-knowledge-tree">
            <div className="career-title-bar">
              <span className="career-icon">{selectedCareer.icon}</span>
              <h2>{selectedCareer.name} - 技能树</h2>
            </div>
            <KnowledgeTree
              treeData={{
                id: selectedCareer.id,
                title: '',
                children: selectedCareer.sections.find(s => s.id === 'learning-path')?.children || []
              }}
              expandedNodes={new Set([selectedCareer.id])}
              onToggle={() => { }}
              onAddChild={() => { }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AICareerPage;
