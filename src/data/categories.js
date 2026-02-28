export const categories = [
  { 
    id: 'all', 
    name: '全部', 
    icon: '📋',
    basicCourses: null
  },
  { 
    id: 'ai', 
    name: '人工智能', 
    icon: '🤖',
    basicCourses: {
      id: 'ai-basic',
      title: '人工智能基础课程',
      children: [
        {
          id: 'math-foundation',
          title: '数学基础',
          children: [
            { id: 'linear-algebra', title: '线性代数' },
            { id: 'probability', title: '概率论与数理统计' },
            { id: 'calculus', title: '微积分' },
            { id: 'optimization', title: '最优化方法' }
          ]
        },
        {
          id: 'programming-foundation',
          title: '编程基础',
          children: [
            { id: 'python', title: 'Python编程' },
            { id: 'data-structures', title: '数据结构与算法' },
            { id: 'linux', title: 'Linux操作系统' }
          ]
        },
        {
          id: 'ml-foundation',
          title: '机器学习基础',
          children: [
            { id: 'ml-theory', title: '机器学习理论' },
            { id: 'ml-algorithms', title: '经典机器学习算法' },
            { id: 'feature-engineering', title: '特征工程' }
          ]
        }
      ]
    }
  },
  { 
    id: 'software', 
    name: '软件开发', 
    icon: '💻',
    basicCourses: {
      id: 'software-basic',
      title: '软件开发基础课程',
      children: [
        {
          id: 'programming-languages',
          title: '编程语言',
          children: [
            { id: 'java', title: 'Java' },
            { id: 'python', title: 'Python' },
            { id: 'javascript', title: 'JavaScript' }
          ]
        },
        {
          id: 'computer-basics',
          title: '计算机基础',
          children: [
            { id: 'data-structures', title: '数据结构' },
            { id: 'algorithms', title: '算法' },
            { id: 'network', title: '计算机网络' },
            { id: 'os', title: '操作系统' }
          ]
        },
        {
          id: 'database-basics',
          title: '数据库基础',
          children: [
            { id: 'mysql', title: 'MySQL' },
            { id: 'sql-basics', title: 'SQL基础' },
            { id: 'database-design', title: '数据库设计' }
          ]
        }
      ]
    }
  },
  { 
    id: 'game', 
    name: '游戏开发', 
    icon: '🎮',
    basicCourses: {
      id: 'game-basic',
      title: '游戏开发基础课程',
      children: [
        {
          id: 'game-theory',
          title: '游戏理论',
          children: [
            { id: 'game-design-principles', title: '游戏设计原理' },
            { id: 'player-psychology', title: '玩家心理学' },
            { id: 'game-genres', title: '游戏类型分析' }
          ]
        },
        {
          id: 'programming-basics',
          title: '编程基础',
          children: [
            { id: 'cpp', title: 'C++编程' },
            { id: 'csharp', title: 'C#编程' },
            { id: 'python', title: 'Python编程' }
          ]
        },
        {
          id: 'math-for-games',
          title: '游戏数学',
          children: [
            { id: 'linear-algebra', title: '线性代数' },
            { id: '3d-math', title: '3D数学' },
            { id: 'physics-basics', title: '物理基础' }
          ]
        }
      ]
    }
  },
  { 
    id: 'product', 
    name: '产品运营', 
    icon: '📱',
    basicCourses: {
      id: 'product-basic',
      title: '产品运营基础课程',
      children: [
        {
          id: 'product-thinking',
          title: '产品思维',
          children: [
            { id: 'user-centric', title: '用户思维' },
            { id: 'business-thinking', title: '商业思维' },
            { id: 'data-thinking', title: '数据思维' }
          ]
        },
        {
          id: 'research-methods',
          title: '调研方法',
          children: [
            { id: 'user-interview', title: '用户访谈' },
            { id: 'questionnaire', title: '问卷调查' },
            { id: 'competitive-analysis', title: '竞品分析' }
          ]
        },
        {
          id: 'data-analysis-basics',
          title: '数据分析基础',
          children: [
            { id: 'excel', title: 'Excel高级应用' },
            { id: 'statistics', title: '统计学基础' },
            { id: 'data-visualization', title: '数据可视化' }
          ]
        }
      ]
    }
  },
  { 
    id: 'design', 
    name: '设计创意', 
    icon: '🎨',
    basicCourses: {
      id: 'design-basic',
      title: '设计创意基础课程',
      children: [
        {
          id: 'art-foundation',
          title: '美术基础',
          children: [
            { id: 'drawing-basics', title: '绘画基础' },
            { id: 'color-theory', title: '色彩理论' },
            { id: 'composition', title: '构图原理' }
          ]
        },
        {
          id: 'design-principles',
          title: '设计原理',
          children: [
            { id: 'design-basics', title: '设计基础' },
            { id: 'typography', title: '字体排版' },
            { id: 'layout', title: '布局设计' }
          ]
        },
        {
          id: 'design-tools',
          title: '设计工具',
          children: [
            { id: 'photoshop', title: 'Photoshop' },
            { id: 'illustrator', title: 'Illustrator' },
            { id: 'figma', title: 'Figma' }
          ]
        }
      ]
    }
  },
  { 
    id: 'finance', 
    name: '金融财务', 
    icon: '💰',
    basicCourses: {
      id: 'finance-basic',
      title: '金融财务基础课程',
      children: [
        {
          id: 'finance-basics',
          title: '金融基础',
          children: [
            { id: 'accounting', title: '会计学' },
            { id: 'corporate-finance', title: '公司金融' },
            { id: 'investment', title: '投资学' }
          ]
        },
        {
          id: 'quantitative-methods',
          title: '量化方法',
          children: [
            { id: 'statistics', title: '统计学' },
            { id: 'econometrics', title: '计量经济学' },
            { id: 'financial-modeling', title: '金融建模' }
          ]
        },
        {
          id: 'financial-markets',
          title: '金融市场',
          children: [
            { id: 'stock-market', title: '股票市场' },
            { id: 'bond-market', title: '债券市场' },
            { id: 'derivatives', title: '衍生品市场' }
          ]
        }
      ]
    }
  },
  { 
    id: 'marketing', 
    name: '市场营销', 
    icon: '📢',
    basicCourses: {
      id: 'marketing-basic',
      title: '市场营销基础课程',
      children: [
        {
          id: 'marketing-principles',
          title: '营销原理',
          children: [
            { id: 'marketing-fundamentals', title: '营销基础' },
            { id: 'consumer-behavior', title: '消费者行为学' },
            { id: 'brand-management', title: '品牌管理' }
          ]
        },
        {
          id: 'digital-marketing-basics',
          title: '数字营销基础',
          children: [
            { id: 'seo', title: 'SEO基础' },
            { id: 'social-media-basics', title: '社交媒体基础' },
            { id: 'content-marketing-basics', title: '内容营销基础' }
          ]
        },
        {
          id: 'marketing-tools',
          title: '营销工具',
          children: [
            { id: 'analytics', title: '数据分析工具' },
            { id: 'automation', title: '营销自动化' },
            { id: 'crm', title: 'CRM系统' }
          ]
        }
      ]
    }
  },
  { 
    id: 'data', 
    name: '数据分析', 
    icon: '📊',
    basicCourses: {
      id: 'data-basic',
      title: '数据分析基础课程',
      children: [
        {
          id: 'statistics-basics',
          title: '统计学基础',
          children: [
            { id: 'descriptive-stats', title: '描述性统计' },
            { id: 'inferential-stats', title: '推断性统计' },
            { id: 'hypothesis-testing', title: '假设检验' }
          ]
        },
        {
          id: 'programming-basics',
          title: '编程基础',
          children: [
            { id: 'python-basics', title: 'Python基础' },
            { id: 'sql-basics', title: 'SQL基础' },
            { id: 'excel-advanced', title: 'Excel高级应用' }
          ]
        },
        {
          id: 'data-processing',
          title: '数据处理',
          children: [
            { id: 'data-cleaning', title: '数据清洗' },
            { id: 'data-transformation', title: '数据转换' },
            { id: 'etl', title: 'ETL流程' }
          ]
        }
      ]
    }
  },
  { 
    id: 'operation', 
    name: '运营管理', 
    icon: '⚙️',
    basicCourses: {
      id: 'operation-basic',
      title: '运营管理基础课程',
      children: [
        {
          id: 'operation-basics',
          title: '运营基础',
          children: [
            { id: 'operation-theory', title: '运营理论' },
            { id: 'business-model', title: '商业模式' },
            { id: 'strategy', title: '战略规划' }
          ]
        },
        {
          id: 'management-skills',
          title: '管理技能',
          children: [
            { id: 'team-management', title: '团队管理' },
            { id: 'project-management', title: '项目管理' },
            { id: 'communication', title: '沟通技巧' }
          ]
        },
        {
          id: 'data-driven',
          title: '数据驱动',
          children: [
            { id: 'data-analysis', title: '数据分析' },
            { id: 'metrics-design', title: '指标体系设计' },
            { id: 'decision-making', title: '数据决策' }
          ]
        }
      ]
    }
  },
  { 
    id: 'hr', 
    name: '人力资源', 
    icon: '👥',
    basicCourses: {
      id: 'hr-basic',
      title: '人力资源基础课程',
      children: [
        {
          id: 'hr-management',
          title: '人力资源管理',
          children: [
            { id: 'hr-fundamentals', title: 'HR基础' },
            { id: 'organizational-design', title: '组织设计' },
            { id: 'talent-management', title: '人才管理' }
          ]
        },
        {
          id: 'legal-basics',
          title: '法律基础',
          children: [
            { id: 'labor-law', title: '劳动法' },
            { id: 'contract-law', title: '合同法' },
            { id: 'social-security', title: '社保政策' }
          ]
        },
        {
          id: 'psychology-basics',
          title: '心理学基础',
          children: [
            { id: 'organizational-behavior', title: '组织行为学' },
            { id: 'industrial-psychology', title: '工业心理学' },
            { id: 'counseling', title: '心理咨询基础' }
          ]
        }
      ]
    }
  },
  { 
    id: 'education', 
    name: '教育培训', 
    icon: '📚',
    basicCourses: {
      id: 'education-basic',
      title: '教育培训基础课程',
      children: [
        {
          id: 'education-theory',
          title: '教育理论',
          children: [
            { id: 'pedagogy', title: '教育学' },
            { id: 'psychology', title: '教育心理学' },
            { id: 'learning-theory', title: '学习理论' }
          ]
        },
        {
          id: 'teaching-skills',
          title: '教学技能',
          children: [
            { id: 'teaching-methods', title: '教学方法' },
            { id: 'classroom-management', title: '课堂管理' },
            { id: 'assessment', title: '教学评估' }
          ]
        },
        {
          id: 'course-design',
          title: '课程设计',
          children: [
            { id: 'curriculum', title: '课程大纲设计' },
            { id: 'lesson-planning', title: '教案设计' },
            { id: 'teaching-materials', title: '教材开发' }
          ]
        }
      ]
    }
  },
  { 
    id: 'medical', 
    name: '医疗健康', 
    icon: '🏥',
    basicCourses: {
      id: 'medical-basic',
      title: '医疗健康基础课程',
      children: [
        {
          id: 'medical-basics',
          title: '医学基础',
          children: [
            { id: 'anatomy', title: '解剖学' },
            { id: 'physiology', title: '生理学' },
            { id: 'pathology', title: '病理学' }
          ]
        },
        {
          id: 'clinical-skills',
          title: '临床技能',
          children: [
            { id: 'diagnosis', title: '诊断学' },
            { id: 'treatment', title: '治疗学' },
            { id: 'emergency', title: '急救学' }
          ]
        },
        {
          id: 'medical-ethics',
          title: '医学伦理',
          children: [
            { id: 'medical-ethics-principles', title: '医学伦理原则' },
            { id: 'patient-rights', title: '患者权益' },
            { id: 'legal-compliance', title: '法律合规' }
          ]
        }
      ]
    }
  },
  { 
    id: 'legal', 
    name: '法律法务', 
    icon: '⚖️',
    basicCourses: {
      id: 'legal-basic',
      title: '法律法务基础课程',
      children: [
        {
          id: 'legal-basics',
          title: '法律基础',
          children: [
            { id: 'constitution', title: '宪法' },
            { id: 'civil-law', title: '民法' },
            { id: 'criminal-law', title: '刑法' }
          ]
        },
        {
          id: 'legal-skills',
          title: '法律技能',
          children: [
            { id: 'legal-writing', title: '法律文书写作' },
            { id: 'legal-research', title: '法律检索' },
            { id: 'litigation', title: '诉讼技巧' }
          ]
        },
        {
          id: 'legal-ethics',
          title: '法律伦理',
          children: [
            { id: 'professional-ethics', title: '职业伦理' },
            { id: 'conflict-of-interest', title: '利益冲突' },
            { id: 'confidentiality', title: '保密义务' }
          ]
        }
      ]
    }
  }
];
