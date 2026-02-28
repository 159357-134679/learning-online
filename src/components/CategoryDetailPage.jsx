import React, { useState, useEffect } from 'react';
import KnowledgeTree from './KnowledgeTree';
import '../styles/CategoryDetailPage.css';

const CategoryDetailPage = ({ category, onBack, onCourseSelect, selectedCareer: propsSelectedCareer }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [selectedCareer, setSelectedCareer] = useState(null);

  // 当从搜索结果进入时，自动切换到职业选择标签
  useEffect(() => {
    if (propsSelectedCareer) {
      setActiveTab('career');
      // 找到对应的职业数据
      const careers = getCareers();
      const career = careers.find(c => c.id === propsSelectedCareer);
      if (career) {
        setSelectedCareer(career);
      }
    }
  }, [propsSelectedCareer, category.id]);

  // 模拟职业岗位数据（后续可以从数据文件中导入）
  const careerDirections = {
    ai: [
      { id: 'ai-engineer', name: '算法工程师', icon: '🔬', description: '负责机器学习、深度学习算法的研究与开发' },
      { id: 'llm-engineer', name: '大模型算法工程师', icon: '🤖', description: '专注于大语言模型的训练、微调与应用开发' },
      { id: 'multimodal-engineer', name: '多模态算法工程师', icon: '🎨', description: '研究图文音视频等多模态数据的融合与处理' },
      { id: 'nlp-engineer', name: 'NLP算法工程师', icon: '💬', description: '专注于自然语言处理技术的研究与应用' },
      { id: 'cv-engineer', name: 'CV算法工程师', icon: '👁️', description: '专注于计算机视觉技术的研究与应用' },
      { id: 'ai-data-engineer', name: 'AI数据工程师', icon: '📊', description: '负责AI数据的采集、处理与管理' },
      { id: 'ai-deployment-engineer', name: 'AI部署工程师', icon: '🚀', description: '负责AI模型的部署、优化与运维' },
      { id: 'ai-product-manager', name: 'AI产品经理', icon: '📱', description: '负责AI产品的规划、设计与落地' }
    ],
    software: [
      { id: 'frontend-engineer', name: '前端工程师', icon: '🌐', description: '负责Web前端开发' },
      { id: 'backend-engineer', name: '后端工程师', icon: '🔧', description: '负责服务器端开发' },
      { id: 'fullstack-engineer', name: '全栈工程师', icon: '🧱', description: '同时负责前后端开发' },
      { id: 'devops-engineer', name: 'DevOps工程师', icon: '⚙️', description: '负责开发运维一体化' },
      { id: 'qa-engineer', name: '测试工程师', icon: '🧪', description: '负责软件质量保证' }
    ],
    game: [
      { id: 'game-programmer', name: '游戏开发工程师', icon: '🎮', description: '负责游戏客户端或服务端程序开发' },
      { id: 'game-designer', name: '游戏策划', icon: '🎯', description: '负责游戏玩法、系统和关卡设计' },
      { id: 'game-artist', name: '游戏美术', icon: '🎨', description: '负责游戏视觉设计和美术资源' },
      { id: 'game-producer', name: '游戏制作人', icon: '🎬', description: '负责游戏项目管理和产品规划' }
    ],
    product: [
      { id: 'product-manager', name: '产品经理', icon: '📱', description: '负责产品规划和管理' },
      { id: 'product-design', name: '产品设计', icon: '🎨', description: '负责产品界面和用户体验设计' },
      { id: 'product-operation', name: '产品运营', icon: '📊', description: '负责产品推广和运营' }
    ],
    design: [
      { id: 'ui-designer', name: 'UI设计师', icon: '🎨', description: '负责用户界面设计' },
      { id: 'ux-designer', name: 'UX设计师', icon: '🧠', description: '负责用户体验设计' },
      { id: 'graphic-designer', name: '平面设计师', icon: '🖼️', description: '负责平面设计和视觉传达' },
      { id: 'motion-designer', name: '动效设计师', icon: '🎬', description: '负责动画和交互效果设计' }
    ],
    finance: [
      { id: 'financial-analyst', name: '金融分析师', icon: '📊', description: '负责金融市场分析和投资研究' },
      { id: 'investment-banker', name: '投资银行家', icon: '💰', description: '负责企业融资和并购交易' },
      { id: 'risk-manager', name: '风险经理', icon: '🛡️', description: '负责金融风险评估和管理' },
      { id: 'financial-planner', name: '财务规划师', icon: '📈', description: '负责个人和企业财务规划' }
    ],
    marketing: [
      { id: 'digital-marketer', name: '数字营销师', icon: '📱', description: '负责数字营销和社交媒体推广' },
      { id: 'brand-manager', name: '品牌经理', icon: '🏷️', description: '负责品牌建设和管理' },
      { id: 'content-marketer', name: '内容营销师', icon: '📝', description: '负责内容创作和营销策略' },
      { id: 'social-media-manager', name: '社交媒体经理', icon: '📱', description: '负责社交媒体运营和管理' }
    ],
    data: [
      { id: 'data-analyst', name: '数据分析师', icon: '📊', description: '负责数据分析和业务洞察' },
      { id: 'data-engineer', name: '数据工程师', icon: '🔧', description: '负责数据基础设施和ETL流程' },
      { id: 'data-scientist', name: '数据科学家', icon: '🧪', description: '负责机器学习和数据建模' },
      { id: 'business-intelligence', name: '商业智能分析师', icon: '💡', description: '负责商业智能和报表分析' }
    ],
    operation: [
      { id: 'operations-manager', name: '运营经理', icon: '⚙️', description: '负责业务运营和管理' },
      { id: 'project-manager', name: '项目经理', icon: '📋', description: '负责项目规划和执行' },
      { id: 'supply-chain-manager', name: '供应链经理', icon: '🚚', description: '负责供应链管理和优化' },
      { id: 'customer-service', name: '客户服务经理', icon: '👥', description: '负责客户服务和支持' }
    ],
    hr: [
      { id: 'hr-manager', name: '人力资源经理', icon: '👥', description: '负责人力资源管理和战略规划' },
      { id: 'recruiter', name: '招聘专员', icon: '🔍', description: '负责人才招聘和筛选' },
      { id: 'training-specialist', name: '培训专员', icon: '📚', description: '负责员工培训和发展' },
      { id: 'compensation-benefits', name: '薪酬福利专员', icon: '💰', description: '负责薪酬体系设计和管理' }
    ],
    education: [
      { id: 'teacher', name: '教师', icon: '📚', description: '负责教学、课程设计和学生指导' },
      { id: 'education-administrator', name: '教育管理员', icon: '🏫', description: '负责教育机构的管理和运营' },
      { id: 'curriculum-designer', name: '课程设计师', icon: '📝', description: '负责课程体系设计和开发' },
      { id: 'education-consultant', name: '教育顾问', icon: '💡', description: '负责教育咨询和规划' }
    ],
    medical: [
      { id: 'doctor', name: '医生', icon: '👨‍⚕️', description: '负责疾病诊断和治疗' },
      { id: 'nurse', name: '护士', icon: '👩‍⚕️', description: '负责患者护理和医疗支持' },
      { id: 'pharmacist', name: '药剂师', icon: '💊', description: '负责药品管理和配药' },
      { id: 'medical-technician', name: '医疗技术人员', icon: '🔬', description: '负责医疗设备操作和检查' }
    ],
    legal: [
      { id: 'lawyer', name: '律师', icon: '⚖️', description: '提供法律咨询和代理服务' },
      { id: 'legal-advisor', name: '法律顾问', icon: '📋', description: '为企业提供法律咨询' },
      { id: 'paralegal', name: '法律助理', icon: '📝', description: '协助律师处理法律事务' },
      { id: 'legal-researcher', name: '法律研究员', icon: '🔍', description: '负责法律研究和分析' }
    ]
  };

  const getCareers = () => {
    return careerDirections[category.id] || [];
  };

  // 模拟岗位技能树数据
  const getCareerSkillTree = (careerId) => {
    return {
      id: careerId,
      title: `${careerId}技能树`,
      children: [
        {
          id: 'core-skills',
          title: '核心技能',
          children: [
            { id: 'skill1', title: '技能1' },
            { id: 'skill2', title: '技能2' },
            { id: 'skill3', title: '技能3' }
          ]
        },
        {
          id: 'optional-skills',
          title: '可选技能',
          children: [
            { id: 'skill4', title: '技能4' },
            { id: 'skill5', title: '技能5' }
          ]
        }
      ]
    };
  };

  return (
    <div className="category-detail-page">
      <div className="page-header">
        <button className="back-btn" onClick={onBack}>
          ← 返回
        </button>
        <h1>{category.name}</h1>
      </div>

      {/* 顶部标签 - 始终显示 */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === 'basic' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('basic');
            setSelectedCareer(null);
          }}
        >
          必学基础知识
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
        {activeTab === 'basic' && (
          <div className="basic-knowledge-section">
            <KnowledgeTree
              treeData={category.basicCourses}
              expandedNodes={new Set([category.basicCourses.id])}
              onToggle={() => { }}
              onAddChild={() => { }}
            />
          </div>
        )}

        {activeTab === 'career' && !selectedCareer && (
          <div className="career-list-section">
            {getCareers().map((career) => (
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
              treeData={getCareerSkillTree(selectedCareer.id)}
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

export default CategoryDetailPage;
