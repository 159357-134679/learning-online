// 课程库 - 所有可复用的课程
export const courses = {
  // Unity开发课程
  'unity-development': {
    id: 'unity-development',
    title: 'Unity开发',
    description: 'Unity游戏引擎开发技术，包括场景搭建、脚本编程、物理系统等',
    resources: [
      {
        id: 'unity-official',
        provider: 'Unity官方',
        name: 'Unity Learn Premium',
        type: '官方教程',
        price: '免费/付费',
        url: 'https://learn.unity.com',
        description: 'Unity官方学习平台，包含从入门到精通的全套课程'
      },
      {
        id: 'unity-bilibili',
        provider: 'B站',
        name: 'Unity游戏开发入门到精通',
        type: '视频教程',
        price: '免费',
        url: 'https://www.bilibili.com',
        description: '国内优质Unity教程，包含实战项目'
      },
      {
        id: 'unity-udemy',
        provider: 'Udemy',
        name: 'Complete C# Unity Game Developer',
        type: '视频课程',
        price: '付费',
        url: 'https://www.udemy.com',
        description: '国际知名Unity课程，英文授课'
      }
    ]
  },
  
  // Python编程
  'python': {
    id: 'python',
    title: 'Python编程',
    description: 'Python编程语言基础与进阶',
    resources: [
      {
        id: 'python-official',
        provider: 'Python官方',
        name: 'Python官方文档',
        type: '文档教程',
        price: '免费',
        url: 'https://docs.python.org',
        description: 'Python官方学习文档'
      },
      {
        id: 'python-liaoxuefeng',
        provider: '廖雪峰',
        name: 'Python教程',
        type: '在线教程',
        price: '免费',
        url: 'https://www.liaoxuefeng.com',
        description: '中文优质Python入门教程'
      },
      {
        id: 'python-coursera',
        provider: 'Coursera',
        name: 'Python for Everybody',
        type: '视频课程',
        price: '免费/付费',
        url: 'https://www.coursera.org',
        description: '密歇根大学Python课程'
      }
    ]
  },
  
  // 深度学习
  'deep-learning': {
    id: 'deep-learning',
    title: '深度学习',
    description: '深度学习理论与实战，包括神经网络、CNN、RNN等',
    resources: [
      {
        id: 'dl-ng',
        provider: 'Coursera',
        name: 'Deep Learning Specialization',
        type: '视频课程',
        price: '付费',
        url: 'https://www.coursera.org',
        description: '吴恩达深度学习专项课程'
      },
      {
        id: 'dl-pytorch',
        provider: 'PyTorch官方',
        name: 'PyTorch Tutorials',
        type: '官方教程',
        price: '免费',
        url: 'https://pytorch.org/tutorials',
        description: 'PyTorch官方教程'
      },
      {
        id: 'dl-bilibili',
        provider: 'B站',
        name: '深度学习入门',
        type: '视频教程',
        price: '免费',
        url: 'https://www.bilibili.com',
        description: '李沐深度学习课程'
      }
    ]
  },
  
  // 计算机视觉
  'computer-vision': {
    id: 'computer-vision',
    title: '计算机视觉',
    description: '图像处理、目标检测、图像分割等CV技术',
    resources: [
      {
        id: 'cv-stanford',
        provider: 'Stanford',
        name: 'CS231n',
        type: '视频课程',
        price: '免费',
        url: 'https://cs231n.stanford.edu',
        description: '斯坦福计算机视觉课程'
      },
      {
        id: 'cv-opencv',
        provider: 'OpenCV',
        name: 'OpenCV官方教程',
        type: '官方教程',
        price: '免费',
        url: 'https://docs.opencv.org',
        description: 'OpenCV计算机视觉库教程'
      }
    ]
  },
  
  // 数据结构与算法
  'data-structures': {
    id: 'data-structures',
    title: '数据结构与算法',
    description: '常用数据结构与算法设计与分析',
    resources: [
      {
        id: 'algo-leetcode',
        provider: 'LeetCode',
        name: 'LeetCode题库',
        type: '刷题平台',
        price: '免费/付费',
        url: 'https://leetcode.com',
        description: '算法刷题平台'
      },
      {
        id: 'algo-coursera',
        provider: 'Coursera',
        name: 'Algorithms Specialization',
        type: '视频课程',
        price: '付费',
        url: 'https://www.coursera.org',
        description: '斯坦福算法专项课程'
      }
    ]
  },
  
  // 线性代数
  'linear-algebra': {
    id: 'linear-algebra',
    title: '线性代数',
    description: '矩阵、向量、线性变换等数学基础',
    resources: [
      {
        id: 'la-mit',
        provider: 'MIT',
        name: 'Linear Algebra',
        type: '视频课程',
        price: '免费',
        url: 'https://ocw.mit.edu',
        description: 'MIT线性代数课程'
      },
      {
        id: 'la-3blue',
        provider: '3Blue1Brown',
        name: 'Essence of Linear Algebra',
        type: '视频教程',
        price: '免费',
        url: 'https://www.youtube.com',
        description: '直观理解线性代数'
      }
    ]
  },
  
  // 前端框架
  'frontend-frameworks': {
    id: 'frontend-frameworks',
    title: '前端框架',
    description: 'React、Vue、Angular等主流前端框架',
    resources: [
      {
        id: 'react-official',
        provider: 'React',
        name: 'React官方文档',
        type: '官方教程',
        price: '免费',
        url: 'https://react.dev',
        description: 'React官方学习文档'
      },
      {
        id: 'vue-official',
        provider: 'Vue',
        name: 'Vue官方教程',
        type: '官方教程',
        price: '免费',
        url: 'https://vuejs.org',
        description: 'Vue.js官方教程'
      }
    ]
  },
  
  // 游戏设计原理
  'game-design-principles': {
    id: 'game-design-principles',
    title: '游戏设计原理',
    description: '游戏机制、玩家体验、游戏平衡等设计理论',
    resources: [
      {
        id: 'gdc-talks',
        provider: 'GDC',
        name: 'GDC Vault',
        type: '视频讲座',
        price: '免费/付费',
        url: 'https://gdcvault.com',
        description: '游戏开发者大会讲座'
      },
      {
        id: 'game-design-book',
        provider: '书籍',
        name: 'The Art of Game Design',
        type: '书籍',
        price: '付费',
        url: '#',
        description: '游戏设计经典书籍'
      }
    ]
  }
};

// 根据课程ID获取课程信息
export const getCourseById = (courseId) => {
  return courses[courseId] || null;
};
