// AI通用知识体系（所有AI岗位共用）
export const aiCommonKnowledge = {
  id: 'ai-common',
  title: 'AI通用知识体系',
  description: '所有AI岗位都需要掌握的基础知识',
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
      id: 'ml-foundation',
      title: '机器学习基础',
      children: [
        { id: 'ml-theory', title: '机器学习理论', courseId: null },
        { id: 'ml-algorithms', title: '经典机器学习算法', courseId: null },
        { id: 'feature-engineering', title: '特征工程', courseId: null }
      ]
    },
    {
      id: 'dl-foundation',
      title: '深度学习基础',
      children: [
        { id: 'neural-networks', title: '神经网络基础', courseId: null },
        { id: 'deep-learning', title: '深度学习', courseId: 'deep-learning' },
        { id: 'cnn', title: '卷积神经网络', courseId: null },
        { id: 'rnn', title: '循环神经网络', courseId: null },
        { id: 'transformer', title: 'Transformer架构', courseId: null }
      ]
    },
    {
      id: 'programming-engineering',
      title: '编程与工程',
      children: [
        { id: 'python', title: 'Python编程', courseId: 'python' },
        { id: 'data-structures', title: '数据结构与算法', courseId: 'data-structures' },
        { id: 'linux', title: 'Linux操作系统', courseId: null },
        { id: 'git', title: 'Git版本控制', courseId: null },
        { id: 'docker', title: 'Docker容器化', courseId: null }
      ]
    },
    {
      id: 'ai-industry-cognition',
      title: 'AI行业认知',
      children: [
        { id: 'ai-trends', title: 'AI发展趋势', courseId: null },
        { id: 'ai-ethics', title: 'AI伦理与合规', courseId: null },
        { id: 'ai-career', title: 'AI职业发展', courseId: null }
      ]
    }
  ]
};

// AI职业方向数据
export const aiCareerDirections = [
  {
    id: 'ai-engineer',
    name: '算法工程师',
    description: '负责机器学习、深度学习算法的研究与开发',
    salary: '20k-50k',
    icon: '🔬',
    sections: [
      {
        id: 'learning-path',
        title: '学习路线',
        type: 'knowledge-tree',
        children: [
          {
            id: 'ml-path',
            title: '机器学习路线',
            children: [
              { id: 'ml-theory', title: '机器学习理论', courseId: null },
              { id: 'ml-algorithms', title: '经典算法', courseId: null },
              { id: 'feature-engineering', title: '特征工程', courseId: null }
            ]
          },
          {
            id: 'dl-path',
            title: '深度学习路线',
            children: [
              { id: 'neural-networks', title: '神经网络', courseId: null },
              { id: 'cnn', title: 'CNN', courseId: null },
              { id: 'rnn', title: 'RNN', courseId: null },
              { id: 'transformer', title: 'Transformer', courseId: null }
            ]
          }
        ]
      },
      {
        id: 'project-practice',
        title: '项目实战',
        type: 'project-list',
        projects: [
          { id: 'p1', title: '图像分类项目', description: '使用CNN实现图像分类', courseId: null },
          { id: 'p2', title: '文本分类项目', description: '使用NLP技术实现文本分类', courseId: null },
          { id: 'p3', title: '推荐系统项目', description: '构建个性化推荐系统', courseId: null }
        ]
      },
      {
        id: 'interview-questions',
        title: '面试题',
        type: 'question-list',
        questions: [
          { id: 'q1', title: '梯度下降算法原理', courseId: null },
          { id: 'q2', title: '过拟合与欠拟合的解决方案', courseId: null },
          { id: 'q3', title: 'CNN与RNN的区别与应用场景', courseId: null },
          { id: 'q4', title: 'Attention机制原理', courseId: null }
        ]
      }
    ]
  },
  {
    id: 'llm-engineer',
    name: '大模型算法工程师',
    description: '专注于大语言模型的训练、微调与应用开发',
    salary: '30k-60k',
    icon: '🤖',
    sections: [
      {
        id: 'learning-path',
        title: '学习路线',
        type: 'knowledge-tree',
        children: [
          {
            id: 'llm-training-path',
            title: '大模型训练路线',
            children: [
              { id: 'pre-training', title: '预训练技术', courseId: null },
              { id: 'distributed-training', title: '分布式训练', courseId: null },
              { id: 'model-compression', title: '模型压缩与量化', courseId: null }
            ]
          },
          {
            id: 'llm-fine-tuning-path',
            title: '大模型微调路线',
            children: [
              { id: 'prompt-engineering', title: '提示工程', courseId: null },
              { id: 'rlhf', title: 'RLHF人类反馈强化学习', courseId: null },
              { id: 'lora', title: 'LoRA低秩适配', courseId: null }
            ]
          }
        ]
      },
      {
        id: 'project-practice',
        title: '项目实战',
        type: 'project-list',
        projects: [
          { id: 'p1', title: '大模型微调项目', description: '使用LoRA微调开源大模型', courseId: null },
          { id: 'p2', title: 'RAG应用开发', description: '构建检索增强生成应用', courseId: null },
          { id: 'p3', title: 'AI Agent开发', description: '开发智能Agent应用', courseId: null }
        ]
      },
      {
        id: 'interview-questions',
        title: '面试题',
        type: 'question-list',
        questions: [
          { id: 'q1', title: 'Transformer架构详解', courseId: null },
          { id: 'q2', title: 'LoRA与全量微调的区别', courseId: null },
          { id: 'q3', title: 'RAG实现原理与优化', courseId: null },
          { id: 'q4', title: '大模型评估指标', courseId: null }
        ]
      }
    ]
  },
  {
    id: 'multimodal-engineer',
    name: '多模态算法工程师',
    description: '研究图文音视频等多模态数据的融合与处理',
    salary: '25k-55k',
    icon: '🎨',
    sections: [
      {
        id: 'learning-path',
        title: '学习路线',
        type: 'knowledge-tree',
        children: [
          {
            id: 'multimodal-fusion-path',
            title: '多模态融合路线',
            children: [
              { id: 'vision-language', title: '视觉-语言模型', courseId: null },
              { id: 'audio-visual', title: '音视频融合', courseId: null },
              { id: 'cross-modal-retrieval', title: '跨模态检索', courseId: null }
            ]
          },
          {
            id: 'multimodal-generation-path',
            title: '多模态生成路线',
            children: [
              { id: 'text-to-image', title: '文本生成图像', courseId: null },
              { id: 'image-captioning', title: '图像描述生成', courseId: null },
              { id: 'video-generation', title: '视频生成', courseId: null }
            ]
          }
        ]
      },
      {
        id: 'project-practice',
        title: '项目实战',
        type: 'project-list',
        projects: [
          { id: 'p1', title: '图文检索项目', description: '实现跨模态检索系统', courseId: null },
          { id: 'p2', title: '图像生成项目', description: '使用Stable Diffusion生成图像', courseId: null },
          { id: 'p3', title: '视频理解项目', description: '多模态视频理解与分析', courseId: null }
        ]
      },
      {
        id: 'interview-questions',
        title: '面试题',
        type: 'question-list',
        questions: [
          { id: 'q1', title: '多模态融合方法对比', courseId: null },
          { id: 'q2', title: 'CLIP模型原理', courseId: null },
          { id: 'q3', title: 'Diffusion模型原理', courseId: null },
          { id: 'q4', title: '多模态对齐技术', courseId: null }
        ]
      }
    ]
  },
  {
    id: 'nlp-engineer',
    name: 'NLP算法工程师',
    description: '专注于自然语言处理技术的研究与应用',
    salary: '20k-45k',
    icon: '💬',
    sections: [
      {
        id: 'learning-path',
        title: '学习路线',
        type: 'knowledge-tree',
        children: [
          {
            id: 'nlp-basic-path',
            title: 'NLP基础路线',
            children: [
              { id: 'nlp-basics', title: 'NLP基础', courseId: null },
              { id: 'word-embedding', title: '词向量与语言模型', courseId: null },
              { id: 'seq2seq', title: '序列到序列模型', courseId: null }
            ]
          },
          {
            id: 'llm-nlp-path',
            title: '大语言模型路线',
            children: [
              { id: 'llm', title: '大语言模型', courseId: null },
              { id: 'rag', title: 'RAG检索增强生成', courseId: null },
              { id: 'agent', title: 'AI Agent开发', courseId: null }
            ]
          }
        ]
      },
      {
        id: 'project-practice',
        title: '项目实战',
        type: 'project-list',
        projects: [
          { id: 'p1', title: '文本分类项目', description: '实现情感分析、文本分类', courseId: null },
          { id: 'p2', title: '命名实体识别项目', description: 'NER实体识别系统', courseId: null },
          { id: 'p3', title: '智能问答项目', description: '基于大模型的问答系统', courseId: null }
        ]
      },
      {
        id: 'interview-questions',
        title: '面试题',
        type: 'question-list',
        questions: [
          { id: 'q1', title: 'Word2Vec原理', courseId: null },
          { id: 'q2', title: 'Attention机制详解', courseId: null },
          { id: 'q3', title: 'BERT与GPT的区别', courseId: null },
          { id: 'q4', title: 'RAG实现方式', courseId: null }
        ]
      }
    ]
  },
  {
    id: 'cv-engineer',
    name: 'CV算法工程师',
    description: '专注于计算机视觉技术的研究与应用',
    salary: '20k-45k',
    icon: '👁️',
    sections: [
      {
        id: 'learning-path',
        title: '学习路线',
        type: 'knowledge-tree',
        children: [
          {
            id: 'cv-basic-path',
            title: 'CV基础路线',
            children: [
              { id: 'cv-basics', title: 'CV基础', courseId: 'computer-vision' },
              { id: 'image-processing', title: '图像处理', courseId: null },
              { id: 'feature-extraction', title: '特征提取', courseId: null }
            ]
          },
          {
            id: 'cv-advanced-path',
            title: 'CV高级路线',
            children: [
              { id: 'object-detection', title: '目标检测', courseId: null },
              { id: 'image-segmentation', title: '图像分割', courseId: null },
              { id: 'gan', title: '生成对抗网络', courseId: null }
            ]
          }
        ]
      },
      {
        id: 'project-practice',
        title: '项目实战',
        type: 'project-list',
        projects: [
          { id: 'p1', title: '人脸识别项目', description: '实现人脸检测与识别', courseId: null },
          { id: 'p2', title: '目标检测项目', description: 'YOLO目标检测实现', courseId: null },
          { id: 'p3', title: '图像分割项目', description: '语义分割与实例分割', courseId: null }
        ]
      },
      {
        id: 'interview-questions',
        title: '面试题',
        type: 'question-list',
        questions: [
          { id: 'q1', title: 'CNN卷积核原理', courseId: null },
          { id: 'q2', title: 'YOLO算法详解', courseId: null },
          { id: 'q3', title: '目标检测算法对比', courseId: null },
          { id: 'q4', title: '图像分割方法', courseId: null }
        ]
      }
    ]
  },
  {
    id: 'ai-data-engineer',
    name: 'AI数据工程师',
    description: '负责AI数据的采集、处理与管理',
    salary: '15k-35k',
    icon: '📊',
    sections: [
      {
        id: 'learning-path',
        title: '学习路线',
        type: 'knowledge-tree',
        children: [
          {
            id: 'data-collection-path',
            title: '数据采集路线',
            children: [
              { id: 'web-scraping', title: '网络爬虫', courseId: null },
              { id: 'data-collection', title: '数据采集方法', courseId: null },
              { id: 'data-labeling', title: '数据标注', courseId: null }
            ]
          },
          {
            id: 'data-processing-path',
            title: '数据处理路线',
            children: [
              { id: 'data-cleaning', title: '数据清洗', courseId: null },
              { id: 'data-transformation', title: '数据转换', courseId: null },
              { id: 'etl', title: 'ETL流程', courseId: null }
            ]
          }
        ]
      },
      {
        id: 'project-practice',
        title: '项目实战',
        type: 'project-list',
        projects: [
          { id: 'p1', title: '数据采集项目', description: '构建大规模数据采集系统', courseId: null },
          { id: 'p2', title: '数据清洗项目', description: '自动化数据清洗流水线', courseId: null },
          { id: 'p3', title: '数据标注平台', description: '开发数据标注工具', courseId: null }
        ]
      },
      {
        id: 'interview-questions',
        title: '面试题',
        type: 'question-list',
        questions: [
          { id: 'q1', title: '数据清洗方法', courseId: null },
          { id: 'q2', title: 'ETL流程设计', courseId: null },
          { id: 'q3', title: '数据质量评估', courseId: null },
          { id: 'q4', title: '大数据处理技术', courseId: null }
        ]
      }
    ]
  },
  {
    id: 'ai-deployment-engineer',
    name: 'AI部署工程师',
    description: '负责AI模型的部署、优化与运维',
    salary: '18k-40k',
    icon: '🚀',
    sections: [
      {
        id: 'learning-path',
        title: '学习路线',
        type: 'knowledge-tree',
        children: [
          {
            id: 'model-deployment-path',
            title: '模型部署路线',
            children: [
              { id: 'model-serving', title: '模型服务化', courseId: null },
              { id: 'docker-k8s', title: 'Docker与K8s', courseId: null },
              { id: 'cloud-deployment', title: '云平台部署', courseId: null }
            ]
          },
          {
            id: 'model-optimization-path',
            title: '模型优化路线',
            children: [
              { id: 'model-compression', title: '模型压缩', courseId: null },
              { id: 'quantization', title: '模型量化', courseId: null },
              { id: 'inference-optimization', title: '推理优化', courseId: null }
            ]
          }
        ]
      },
      {
        id: 'project-practice',
        title: '项目实战',
        type: 'project-list',
        projects: [
          { id: 'p1', title: '模型部署项目', description: '使用TensorFlow Serving部署模型', courseId: null },
          { id: 'p2', title: 'K8s集群部署', description: 'Kubernetes集群部署与管理', courseId: null },
          { id: 'p3', title: '模型优化项目', description: '模型压缩与推理加速', courseId: null }
        ]
      },
      {
        id: 'interview-questions',
        title: '面试题',
        type: 'question-list',
        questions: [
          { id: 'q1', title: '模型部署方案', courseId: null },
          { id: 'q2', title: 'Docker与K8s使用', courseId: null },
          { id: 'q3', title: '模型压缩方法', courseId: null },
          { id: 'q4', title: '推理性能优化', courseId: null }
        ]
      }
    ]
  },
  {
    id: 'ai-product-manager',
    name: 'AI产品经理',
    description: '负责AI产品的规划、设计与落地',
    salary: '20k-45k',
    icon: '📱',
    sections: [
      {
        id: 'learning-path',
        title: '学习路线',
        type: 'knowledge-tree',
        children: [
          {
            id: 'ai-product-path',
            title: 'AI产品路线',
            children: [
              { id: 'ai-product-framework', title: 'AI产品框架', courseId: null },
              { id: 'model-selection', title: '模型选型', courseId: null },
              { id: 'ai-ux', title: 'AI交互设计', courseId: null }
            ]
          },
          {
            id: 'ai-project-path',
            title: 'AI项目管理',
            children: [
              { id: 'data-pipeline', title: '数据管道管理', courseId: null },
              { id: 'model-lifecycle', title: '模型生命周期', courseId: null },
              { id: 'ai-ethics', title: 'AI伦理与合规', courseId: null }
            ]
          }
        ]
      },
      {
        id: 'project-practice',
        title: '项目实战',
        type: 'project-list',
        projects: [
          { id: 'p1', title: 'AI产品设计', description: '设计AI产品方案', courseId: null },
          { id: 'p2', title: '数据需求分析', description: 'AI项目数据需求分析', courseId: null },
          { id: 'p3', title: 'AI产品上线', description: 'AI产品从0到1上线', courseId: null }
        ]
      },
      {
        id: 'interview-questions',
        title: '面试题',
        type: 'question-list',
        questions: [
          { id: 'q1', title: 'AI产品定位', courseId: null },
          { id: 'q2', title: '模型选型方法', courseId: null },
          { id: 'q3', title: 'AI产品评估指标', courseId: null },
          { id: 'q4', title: 'AI伦理问题', courseId: null }
        ]
      }
    ]
  }
];

// 根据ID获取职业方向
export const getCareerDirectionById = (id) => {
  return aiCareerDirections.find(career => career.id === id) || null;
};
