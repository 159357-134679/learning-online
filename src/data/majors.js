export const majors = [
  // 人工智能类
  {
    id: 'ai-engineer',
    name: '算法工程师',
    category: 'ai',
    description: '负责机器学习、深度学习算法的研究与开发',
    salary: '20k-50k',
    knowledgeTree: {
      id: 'root',
      title: '算法工程师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'math-foundation',
              title: '数学基础',
              children: [
                { id: 'linear-algebra', title: '线性代数', courseId: 'linear-algebra' },
                { id: 'probability', title: '概率论与数理统计', courseId: null },
                { id: 'calculus', title: '微积分', courseId: null },
                { id: 'optimization', title: '最优化方法', courseId: null }
              ]
            },
            {
              id: 'programming-foundation',
              title: '编程基础',
              children: [
                { id: 'python', title: 'Python编程', courseId: 'python' },
                { id: 'data-structures', title: '数据结构与算法', courseId: 'data-structures' }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'ml-courses',
              title: '机器学习',
              children: [
                { id: 'ml-theory', title: '机器学习理论', courseId: null },
                { id: 'ml-algorithms', title: '经典机器学习算法', courseId: null }
              ]
            },
            {
              id: 'dl-courses',
              title: '深度学习',
              children: [
                { id: 'deep-learning', title: '深度学习基础', courseId: 'deep-learning' },
                { id: 'neural-networks', title: '神经网络', courseId: null },
                { id: 'cnn', title: '卷积神经网络', courseId: null },
                { id: 'rnn', title: '循环神经网络', courseId: null }
              ]
            },
            {
              id: 'cv-courses',
              title: '计算机视觉',
              children: [
                { id: 'computer-vision', title: '计算机视觉基础', courseId: 'computer-vision' },
                { id: 'object-detection', title: '目标检测', courseId: null },
                { id: 'image-segmentation', title: '图像分割', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'advanced-courses',
          title: '进阶课程',
          children: [
            {
              id: 'advanced-ml',
              title: '高级机器学习',
              children: [
                { id: 'reinforcement-learning', title: '强化学习', courseId: null },
                { id: 'generative-models', title: '生成模型', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'employment-courses',
          title: '就业准备',
          children: [
            {
              id: 'project-practice',
              title: '项目实战',
              children: [
                { id: 'kaggle-competition', title: 'Kaggle竞赛', courseId: null },
                { id: 'open-source', title: '开源项目贡献', courseId: null }
              ]
            },
            {
              id: 'interview-prep',
              title: '面试准备',
              children: [
                { id: 'algorithm-interview', title: '算法面试', courseId: null },
                { id: 'ml-interview', title: '机器学习面试', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'llm-engineer',
    name: '大模型算法工程师',
    category: 'ai',
    description: '专注于大语言模型的训练、微调与应用开发',
    salary: '30k-60k',
    knowledgeTree: {
      id: 'root',
      title: '大模型算法工程师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'math-foundation',
              title: '数学基础',
              children: [
                { id: 'linear-algebra', title: '线性代数', courseId: 'linear-algebra' },
                { id: 'probability', title: '概率论', courseId: null }
              ]
            },
            {
              id: 'programming-foundation',
              title: '编程基础',
              children: [
                { id: 'python', title: 'Python编程', courseId: 'python' },
                { id: 'pytorch', title: 'PyTorch框架', courseId: 'deep-learning' }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'llm-training',
              title: '大模型训练',
              children: [
                { id: 'pre-training', title: '预训练技术', courseId: null },
                { id: 'distributed-training', title: '分布式训练', courseId: null },
                { id: 'model-compression', title: '模型压缩与量化', courseId: null }
              ]
            },
            {
              id: 'llm-fine-tuning',
              title: '大模型微调',
              children: [
                { id: 'prompt-engineering', title: '提示工程', courseId: null },
                { id: 'rlhf', title: 'RLHF人类反馈强化学习', courseId: null },
                { id: 'lora', title: 'LoRA低秩适配', courseId: null }
              ]
            },
            {
              id: 'llm-application',
              title: '大模型应用',
              children: [
                { id: 'rag', title: 'RAG检索增强生成', courseId: null },
                { id: 'agent', title: 'AI Agent开发', courseId: null },
                { id: 'langchain', title: 'LangChain框架', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'employment-courses',
          title: '就业准备',
          children: [
            {
              id: 'project-practice',
              title: '项目实战',
              children: [
                { id: 'llm-project', title: '大模型应用项目', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'multimodal-engineer',
    name: '多模态算法工程师',
    category: 'ai',
    description: '研究图文音视频等多模态数据的融合与处理',
    salary: '25k-55k',
    knowledgeTree: {
      id: 'root',
      title: '多模态算法工程师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'math-foundation',
              title: '数学基础',
              children: [
                { id: 'linear-algebra', title: '线性代数', courseId: 'linear-algebra' }
              ]
            },
            {
              id: 'programming-foundation',
              title: '编程基础',
              children: [
                { id: 'python', title: 'Python编程', courseId: 'python' }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'multimodal-fusion',
              title: '多模态融合',
              children: [
                { id: 'vision-language', title: '视觉-语言模型', courseId: null },
                { id: 'audio-visual', title: '音视频融合', courseId: null },
                { id: 'cross-modal-retrieval', title: '跨模态检索', courseId: null }
              ]
            },
            {
              id: 'multimodal-generation',
              title: '多模态生成',
              children: [
                { id: 'text-to-image', title: '文本生成图像', courseId: null },
                { id: 'image-captioning', title: '图像描述生成', courseId: null },
                { id: 'video-generation', title: '视频生成', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'ai-product-manager',
    name: 'AI产品经理',
    category: 'ai',
    description: '负责AI产品的规划、设计与落地',
    salary: '20k-45k',
    knowledgeTree: {
      id: 'root',
      title: 'AI产品经理知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'ai-basics',
              title: 'AI基础',
              children: [
                { id: 'ml-concepts', title: '机器学习概念', courseId: null },
                { id: 'deep-learning-basics', title: '深度学习基础', courseId: 'deep-learning' }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'ai-product-design',
              title: 'AI产品设计',
              children: [
                { id: 'ai-product-framework', title: 'AI产品框架', courseId: null },
                { id: 'model-selection', title: '模型选型', courseId: null },
                { id: 'ai-ux', title: 'AI交互设计', courseId: null }
              ]
            },
            {
              id: 'ai-project-management',
              title: 'AI项目管理',
              children: [
                { id: 'data-pipeline', title: '数据管道管理', courseId: null },
                { id: 'model-lifecycle', title: '模型生命周期', courseId: null },
                { id: 'ai-ethics', title: 'AI伦理与合规', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  // 软件开发类
  {
    id: 'frontend-engineer',
    name: '前端开发工程师',
    category: 'software',
    description: '负责Web和移动端用户界面的开发',
    salary: '15k-35k',
    knowledgeTree: {
      id: 'root',
      title: '前端开发工程师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'web-basics',
              title: 'Web基础',
              children: [
                { id: 'html-css', title: 'HTML/CSS', courseId: null },
                { id: 'javascript', title: 'JavaScript', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'frameworks',
              title: '前端框架',
              children: [
                { id: 'react', title: 'React', courseId: 'frontend-frameworks' },
                { id: 'vue', title: 'Vue.js', courseId: 'frontend-frameworks' },
                { id: 'angular', title: 'Angular', courseId: 'frontend-frameworks' }
              ]
            },
            {
              id: 'engineering',
              title: '前端工程化',
              children: [
                { id: 'webpack', title: 'Webpack/Vite', courseId: null },
                { id: 'testing', title: '前端测试', courseId: null },
                { id: 'ci-cd', title: 'CI/CD', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'backend-engineer',
    name: '后端开发工程师',
    category: 'software',
    description: '负责服务器端逻辑和数据处理',
    salary: '15k-40k',
    knowledgeTree: {
      id: 'root',
      title: '后端开发工程师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'programming-basics',
              title: '编程基础',
              children: [
                { id: 'java', title: 'Java', courseId: null },
                { id: 'python', title: 'Python', courseId: 'python' }
              ]
            },
            {
              id: 'computer-basics',
              title: '计算机基础',
              children: [
                { id: 'data-structures', title: '数据结构与算法', courseId: 'data-structures' },
                { id: 'network', title: '计算机网络', courseId: null },
                { id: 'os', title: '操作系统', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'frameworks',
              title: '开发框架',
              children: [
                { id: 'spring', title: 'Spring全家桶', courseId: null },
                { id: 'django', title: 'Django/Flask', courseId: null }
              ]
            },
            {
              id: 'architecture',
              title: '系统架构',
              children: [
                { id: 'microservices', title: '微服务架构', courseId: null },
                { id: 'distributed-system', title: '分布式系统', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'fullstack-engineer',
    name: '全栈开发工程师',
    category: 'software',
    description: '具备前后端开发能力的综合型人才',
    salary: '20k-45k',
    knowledgeTree: {
      id: 'root',
      title: '全栈开发工程师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'web-basics',
              title: 'Web基础',
              children: [
                { id: 'html-css', title: 'HTML/CSS', courseId: null },
                { id: 'javascript', title: 'JavaScript', courseId: null },
                { id: 'python', title: 'Python', courseId: 'python' }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'fullstack-frameworks',
              title: '全栈框架',
              children: [
                { id: 'nextjs', title: 'Next.js', courseId: 'frontend-frameworks' },
                { id: 'django', title: 'Django', courseId: null }
              ]
            },
            {
              id: 'devops',
              title: 'DevOps',
              children: [
                { id: 'docker', title: 'Docker容器化', courseId: null },
                { id: 'kubernetes', title: 'Kubernetes', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'mobile-engineer',
    name: '移动开发工程师',
    category: 'software',
    description: '负责iOS和Android应用开发',
    salary: '15k-35k',
    knowledgeTree: {
      id: 'root',
      title: '移动开发工程师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'programming-basics',
              title: '编程基础',
              children: [
                { id: 'java', title: 'Java', courseId: null },
                { id: 'swift', title: 'Swift', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'native-development',
              title: '原生开发',
              children: [
                { id: 'ios-swift', title: 'iOS/Swift', courseId: null },
                { id: 'android-kotlin', title: 'Android/Kotlin', courseId: null }
              ]
            },
            {
              id: 'cross-platform',
              title: '跨平台开发',
              children: [
                { id: 'flutter', title: 'Flutter', courseId: null },
                { id: 'react-native', title: 'React Native', courseId: 'frontend-frameworks' }
              ]
            }
          ]
        }
      ]
    }
  },
  // 游戏开发类
  {
    id: 'game-designer',
    name: '游戏策划',
    category: 'game',
    description: '负责游戏整体设计、玩法规则和系统设计',
    salary: '12k-30k',
    knowledgeTree: {
      id: 'root',
      title: '游戏策划知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'game-theory',
              title: '游戏理论',
              children: [
                { id: 'game-design-principles', title: '游戏设计原理', courseId: 'game-design-principles' },
                { id: 'player-psychology', title: '玩家心理学', courseId: null },
                { id: 'game-genres', title: '游戏类型分析', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'system-design',
              title: '系统策划',
              children: [
                { id: 'core-gameplay', title: '核心玩法设计', courseId: null },
                { id: 'economic-system', title: '经济系统设计', courseId: null },
                { id: 'social-system', title: '社交系统设计', courseId: null }
              ]
            },
            {
              id: 'level-design',
              title: '关卡策划',
              children: [
                { id: 'level-design-theory', title: '关卡设计理论', courseId: null },
                { id: 'puzzle-design', title: '谜题设计', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'game-programmer',
    name: '游戏开发工程师',
    category: 'game',
    description: '负责游戏客户端或服务端程序开发',
    salary: '15k-40k',
    knowledgeTree: {
      id: 'root',
      title: '游戏开发工程师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'programming-basics',
              title: '编程基础',
              children: [
                { id: 'cpp', title: 'C++编程', courseId: null },
                { id: 'csharp', title: 'C#编程', courseId: null },
                { id: 'data-structures', title: '数据结构与算法', courseId: 'data-structures' }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'game-engines',
              title: '游戏引擎',
              children: [
                { id: 'unity', title: 'Unity引擎', courseId: 'unity-development' },
                { id: 'unreal', title: 'Unreal Engine', courseId: null }
              ]
            },
            {
              id: 'graphics',
              title: '图形学',
              children: [
                { id: 'rendering', title: '渲染管线', courseId: null },
                { id: 'shader', title: 'Shader编程', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'game-artist',
    name: '游戏美术设计师',
    category: 'game',
    description: '负责游戏角色、场景、UI等视觉设计',
    salary: '10k-30k',
    knowledgeTree: {
      id: 'root',
      title: '游戏美术设计师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'art-foundation',
              title: '美术基础',
              children: [
                { id: 'drawing-basics', title: '绘画基础', courseId: null },
                { id: 'color-theory', title: '色彩理论', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'character-design',
              title: '角色设计',
              children: [
                { id: 'character-modeling', title: '角色建模', courseId: null },
                { id: 'character-animation', title: '角色动画', courseId: null }
              ]
            },
            {
              id: 'scene-design',
              title: '场景设计',
              children: [
                { id: 'scene-modeling', title: '场景建模', courseId: null },
                { id: 'environment-art', title: '环境美术', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  // 产品运营类
  {
    id: 'product-manager',
    name: '产品经理',
    category: 'product',
    description: '负责产品的规划、设计和全生命周期管理',
    salary: '15k-40k',
    knowledgeTree: {
      id: 'root',
      title: '产品经理知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'product-thinking',
              title: '产品思维',
              children: [
                { id: 'user-centric', title: '用户思维', courseId: null },
                { id: 'business-thinking', title: '商业思维', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'product-design',
              title: '产品设计',
              children: [
                { id: 'prd-writing', title: 'PRD文档撰写', courseId: null },
                { id: 'prototype', title: '原型设计', courseId: null }
              ]
            },
            {
              id: 'product-management',
              title: '产品管理',
              children: [
                { id: 'roadmap', title: '产品路线图', courseId: null },
                { id: 'version-management', title: '版本管理', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'operation-specialist',
    name: '运营专员',
    category: 'product',
    description: '负责用户运营、内容运营和活动运营',
    salary: '8k-20k',
    knowledgeTree: {
      id: 'root',
      title: '运营专员知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'data-analysis-basics',
              title: '数据分析基础',
              children: [
                { id: 'excel', title: 'Excel高级应用', courseId: null },
                { id: 'statistics', title: '统计学基础', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'user-operation',
              title: '用户运营',
              children: [
                { id: 'user-segmentation', title: '用户分层', courseId: null },
                { id: 'user-incentive', title: '用户激励', courseId: null }
              ]
            },
            {
              id: 'content-operation',
              title: '内容运营',
              children: [
                { id: 'content-strategy', title: '内容策略', courseId: null },
                { id: 'content-production', title: '内容生产', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  // 设计创意类
  {
    id: 'ui-designer',
    name: 'UI设计师',
    category: 'design',
    description: '负责用户界面的视觉设计',
    salary: '10k-25k',
    knowledgeTree: {
      id: 'root',
      title: 'UI设计师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'art-foundation',
              title: '美术基础',
              children: [
                { id: 'color-theory', title: '色彩理论', courseId: null },
                { id: 'composition', title: '构图原理', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'design-tools',
              title: '设计工具',
              children: [
                { id: 'figma', title: 'Figma', courseId: null },
                { id: 'sketch', title: 'Sketch', courseId: null }
              ]
            },
            {
              id: 'ui-design',
              title: 'UI设计',
              children: [
                { id: 'mobile-ui', title: '移动端UI', courseId: null },
                { id: 'web-ui', title: 'Web端UI', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'visual-designer',
    name: '视觉设计师',
    category: 'design',
    description: '负责品牌视觉、平面设计和视觉传达',
    salary: '10k-25k',
    knowledgeTree: {
      id: 'root',
      title: '视觉设计师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'art-foundation',
              title: '美术基础',
              children: [
                { id: 'drawing-basics', title: '绘画基础', courseId: null },
                { id: 'color-theory', title: '色彩理论', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'brand-design',
              title: '品牌设计',
              children: [
                { id: 'logo-design', title: 'Logo设计', courseId: null },
                { id: 'vi-design', title: 'VI设计', courseId: null }
              ]
            },
            {
              id: 'graphic-design',
              title: '平面设计',
              children: [
                { id: 'poster-design', title: '海报设计', courseId: null },
                { id: 'packaging-design', title: '包装设计', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  // 金融财务类
  {
    id: 'financial-analyst',
    name: '金融分析师',
    category: 'finance',
    description: '负责金融市场分析和投资研究',
    salary: '15k-40k',
    knowledgeTree: {
      id: 'root',
      title: '金融分析师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'finance-basics',
              title: '金融基础',
              children: [
                { id: 'accounting', title: '会计学', courseId: null },
                { id: 'corporate-finance', title: '公司金融', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'equity-analysis',
              title: '权益分析',
              children: [
                { id: 'stock-valuation', title: '股票估值', courseId: null },
                { id: 'industry-analysis', title: '行业分析', courseId: null }
              ]
            },
            {
              id: 'fixed-income',
              title: '固定收益',
              children: [
                { id: 'bond-valuation', title: '债券估值', courseId: null },
                { id: 'credit-analysis', title: '信用分析', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'risk-manager',
    name: '风控专员',
    category: 'finance',
    description: '负责风险识别、评估和控制',
    salary: '12k-30k',
    knowledgeTree: {
      id: 'root',
      title: '风控专员知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'finance-basics',
              title: '金融基础',
              children: [
                { id: 'accounting', title: '会计学', courseId: null },
                { id: 'statistics', title: '统计学', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'credit-risk',
              title: '信用风险',
              children: [
                { id: 'credit-scoring', title: '信用评分', courseId: null },
                { id: 'credit-modeling', title: '信用建模', courseId: null }
              ]
            },
            {
              id: 'market-risk',
              title: '市场风险',
              children: [
                { id: 'var', title: 'VaR模型', courseId: null },
                { id: 'stress-testing', title: '压力测试', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  // 数据分析类
  {
    id: 'data-analyst',
    name: '数据分析师',
    category: 'data',
    description: '负责数据收集、处理和分析，提供业务洞察',
    salary: '12k-30k',
    knowledgeTree: {
      id: 'root',
      title: '数据分析师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'statistics-basics',
              title: '统计学基础',
              children: [
                { id: 'descriptive-stats', title: '描述性统计', courseId: null },
                { id: 'inferential-stats', title: '推断性统计', courseId: null }
              ]
            },
            {
              id: 'programming-basics',
              title: '编程基础',
              children: [
                { id: 'python-basics', title: 'Python基础', courseId: 'python' },
                { id: 'sql-basics', title: 'SQL基础', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'data-visualization',
              title: '数据可视化',
              children: [
                { id: 'visualization-tools', title: '可视化工具', courseId: null },
                { id: 'dashboard', title: '仪表盘设计', courseId: null }
              ]
            },
            {
              id: 'business-analysis',
              title: '业务分析',
              children: [
                { id: 'metrics-design', title: '指标体系设计', courseId: null },
                { id: 'funnel-analysis', title: '漏斗分析', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'data-scientist',
    name: '数据科学家',
    category: 'data',
    description: '运用机器学习和统计方法解决复杂业务问题',
    salary: '25k-60k',
    knowledgeTree: {
      id: 'root',
      title: '数据科学家知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'math-foundation',
              title: '数学基础',
              children: [
                { id: 'linear-algebra', title: '线性代数', courseId: 'linear-algebra' },
                { id: 'probability', title: '概率论', courseId: null }
              ]
            },
            {
              id: 'programming-basics',
              title: '编程基础',
              children: [
                { id: 'python', title: 'Python', courseId: 'python' },
                { id: 'data-structures', title: '数据结构与算法', courseId: 'data-structures' }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'ml-algorithms',
              title: '机器学习算法',
              children: [
                { id: 'supervised-learning', title: '监督学习', courseId: null },
                { id: 'unsupervised-learning', title: '无监督学习', courseId: null }
              ]
            },
            {
              id: 'deep-learning',
              title: '深度学习',
              children: [
                { id: 'neural-networks', title: '神经网络', courseId: 'deep-learning' },
                { id: 'cnn-rnn', title: 'CNN/RNN', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  // 市场营销类
  {
    id: 'marketing-specialist',
    name: '市场营销专员',
    category: 'marketing',
    description: '负责市场调研、品牌推广和营销策划',
    salary: '8k-20k',
    knowledgeTree: {
      id: 'root',
      title: '市场营销专员知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'marketing-principles',
              title: '营销原理',
              children: [
                { id: 'marketing-fundamentals', title: '营销基础', courseId: null },
                { id: 'consumer-behavior', title: '消费者行为学', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'digital-marketing',
              title: '数字营销',
              children: [
                { id: 'seo-sem', title: 'SEO/SEM', courseId: null },
                { id: 'social-media', title: '社交媒体营销', courseId: null }
              ]
            },
            {
              id: 'market-research',
              title: '市场调研',
              children: [
                { id: 'research-methods', title: '调研方法', courseId: null },
                { id: 'data-analysis', title: '数据分析', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  // 人力资源类
  {
    id: 'hr-specialist',
    name: '人力资源专员',
    category: 'hr',
    description: '负责招聘、培训、绩效等人力资源管理工作',
    salary: '8k-18k',
    knowledgeTree: {
      id: 'root',
      title: '人力资源专员知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'hr-management',
              title: '人力资源管理',
              children: [
                { id: 'hr-fundamentals', title: 'HR基础', courseId: null },
                { id: 'organizational-design', title: '组织设计', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'recruitment',
              title: '招聘模块',
              children: [
                { id: 'job-analysis', title: '岗位分析', courseId: null },
                { id: 'interview-skills', title: '面试技巧', courseId: null }
              ]
            },
            {
              id: 'training',
              title: '培训模块',
              children: [
                { id: 'training-needs', title: '培训需求分析', courseId: null },
                { id: 'course-design', title: '课程设计', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  },
  // 教育培训类
  {
    id: 'teacher',
    name: '教师',
    category: 'education',
    description: '负责教学、课程设计和学生指导',
    salary: '6k-20k',
    knowledgeTree: {
      id: 'root',
      title: '教师知识体系',
      children: [
        {
          id: 'basic-courses',
          title: '基础课程',
          children: [
            {
              id: 'education-theory',
              title: '教育理论',
              children: [
                { id: 'pedagogy', title: '教育学', courseId: null },
                { id: 'psychology', title: '教育心理学', courseId: null }
              ]
            }
          ]
        },
        {
          id: 'professional-courses',
          title: '专业课程',
          children: [
            {
              id: 'curriculum-design',
              title: '课程设计',
              children: [
                { id: 'syllabus', title: '教学大纲', courseId: null },
                { id: 'lesson-planning', title: '教案设计', courseId: null }
              ]
            },
            {
              id: 'classroom-management',
              title: '课堂管理',
              children: [
                { id: 'teaching-skills', title: '教学技能', courseId: null },
                { id: 'student-engagement', title: '学生参与', courseId: null }
              ]
            }
          ]
        }
      ]
    }
  }
];

// 根据ID查找岗位
export const getMajorById = (id) => {
  return majors.find(major => major.id === id) || null;
};

// 根据分类ID获取岗位列表
export const getMajorsByCategory = (categoryId) => {
  if (categoryId === 'all') {
    return majors;
  }
  return majors.filter(major => major.category === categoryId);
};

// 搜索岗位
export const searchMajors = (keyword, categoryId = 'all') => {
  let result = getMajorsByCategory(categoryId);
  
  if (keyword && keyword.trim()) {
    const searchTerm = keyword.toLowerCase().trim();
    result = result.filter(major => 
      major.name.toLowerCase().includes(searchTerm) ||
      major.description.toLowerCase().includes(searchTerm)
    );
  }
  
  return result;
};
