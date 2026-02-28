# 专业知识体系

一个基于 React 的专业知识体系管理系统，支持专业搜索、分类浏览和知识树管理。

## 项目结构

```
D:\Trae项目\
├── src/
│   ├── components/       # React 组件
│   │   ├── HomePage.jsx          # 首页组件
│   │   ├── SearchBar.jsx         # 搜索栏组件
│   │   ├── CategoryTags.jsx      # 分类标签组件
│   │   ├── MajorsList.jsx        # 专业列表组件
│   │   ├── MajorDetailPage.jsx   # 专业详情页组件
│   │   ├── KnowledgeTree.jsx     # 知识树组件
│   │   └── TreeNode.jsx          # 树节点组件
│   ├── data/             # 数据文件
│   │   ├── categories.js         # 分类数据
│   │   └── majors.js             # 专业数据
│   ├── utils/            # 工具函数
│   │   └── majorHelpers.js       # 专业相关工具函数
│   ├── styles/           # 样式文件
│   │   ├── global.css            # 全局样式
│   │   ├── HomePage.css          # 首页样式
│   │   ├── SearchBar.css         # 搜索栏样式
│   │   ├── CategoryTags.css      # 分类标签样式
│   │   ├── MajorsList.css        # 专业列表样式
│   │   ├── MajorDetailPage.css   # 详情页样式
│   │   ├── KnowledgeTree.css     # 知识树样式
│   │   ├── Loading.css           # 加载状态样式
│   │   └── EmptyState.css        # 空状态样式
│   ├── App.jsx           # 根组件
│   └── main.jsx          # 应用入口
├── index.html            # HTML 模板
├── vite.config.js        # Vite 配置
└── package.json          # 项目配置
```

## 功能特性

- 专业搜索：支持按关键词搜索专业
- 分类浏览：按不同分类浏览专业
- 知识树管理：可视化展示专业知识体系，支持展开/折叠节点
- 动态添加节点：可以在知识树中动态添加新节点
- 响应式设计：支持移动端和桌面端

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 技术栈

- React 18
- Vite 5
- CSS3
