import React, { useState, useEffect } from 'react';
import CategoryTags from './CategoryTags';
import { categories } from '../data/categories';
import '../styles/HomePage.css';

const HomePage = ({ onCategorySelect, onCareerSelect }) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    // 模拟岗位数据
    const careerData = {
        ai: [
            { id: 'ai-engineer', name: '算法工程师', category: '人工智能' },
            { id: 'llm-engineer', name: '大模型算法工程师', category: '人工智能' },
            { id: 'multimodal-engineer', name: '多模态算法工程师', category: '人工智能' },
            { id: 'nlp-engineer', name: 'NLP算法工程师', category: '人工智能' },
            { id: 'cv-engineer', name: 'CV算法工程师', category: '人工智能' },
            { id: 'ai-data-engineer', name: 'AI数据工程师', category: '人工智能' },
            { id: 'ai-deployment-engineer', name: 'AI部署工程师', category: '人工智能' },
            { id: 'ai-product-manager', name: 'AI产品经理', category: '人工智能' }
        ],
        software: [
            { id: 'frontend-engineer', name: '前端工程师', category: '软件开发' },
            { id: 'backend-engineer', name: '后端工程师', category: '软件开发' },
            { id: 'fullstack-engineer', name: '全栈工程师', category: '软件开发' },
            { id: 'devops-engineer', name: 'DevOps工程师', category: '软件开发' },
            { id: 'qa-engineer', name: '测试工程师', category: '软件开发' }
        ],
        hr: [
            { id: 'hr-manager', name: '人力资源经理', category: '人力资源' },
            { id: 'recruiter', name: '招聘专员', category: '人力资源' },
            { id: 'training-specialist', name: '培训专员', category: '人力资源' },
            { id: 'compensation-benefits', name: '薪酬福利专员', category: '人力资源' }
        ]
    };

    // 搜索逻辑
    useEffect(() => {
        if (searchKeyword.trim()) {
            const keyword = searchKeyword.toLowerCase();
            const results = [];

            // 搜索分类
            const categoryResults = categories
                .filter(cat => cat.id !== 'all' && cat.name.toLowerCase().includes(keyword))
                .map(cat => ({
                    id: cat.id,
                    name: cat.name,
                    type: 'category',
                    icon: cat.icon
                }));

            // 搜索岗位
            const careerResults = [];
            Object.entries(careerData).forEach(([categoryId, careers]) => {
                const matchedCareers = careers
                    .filter(career => career.name.toLowerCase().includes(keyword))
                    .map(career => ({
                        id: career.id,
                        name: career.name,
                        type: 'career',
                        category: career.category,
                        categoryId: categoryId
                    }));
                careerResults.push(...matchedCareers);
            });

            // 排序：分类优先
            setSearchResults([...categoryResults, ...careerResults]);
            setShowResults(true);
        } else {
            setSearchResults([]);
            setShowResults(false);
        }
    }, [searchKeyword]);

    const handleSearchResultClick = (result) => {
        if (result.type === 'category') {
            const category = categories.find(cat => cat.id === result.id);
            onCategorySelect(category);
        } else if (result.type === 'career') {
            const category = categories.find(cat => cat.id === result.categoryId);
            onCareerSelect(category, result.id);
        }
        setSearchKeyword('');
        setShowResults(false);
    };

    return (
        <div className="home-page">
            <div className="home-header">
                <h1>就业技能学习平台</h1>
                <p>选择职业方向，开启学习之旅</p>
            </div>

            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="搜索职业方向..."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    onFocus={() => searchKeyword && setShowResults(true)}
                    onBlur={() => setTimeout(() => setShowResults(false), 200)}
                />
                {showResults && searchResults.length > 0 && (
                    <div className="search-results">
                        {searchResults.map((result) => (
                            <div
                                key={result.id}
                                className="search-result-item"
                                onClick={() => handleSearchResultClick(result)}
                            >
                                <span className="result-name">
                                    {result.icon && <span className="result-icon">{result.icon}</span>}
                                    {result.name}
                                </span>
                                <span className="result-type">
                                    {result.type === 'category' ? '分类' : result.category}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="categories-section">
                <h2>专业分类</h2>
                <div className="categories-grid">
                    {categories.filter(cat => cat.id !== 'all').map((category) => (
                        <div
                            key={category.id}
                            className="category-card"
                            onClick={() => onCategorySelect(category)}
                        >
                            <div className="category-icon">{category.icon}</div>
                            <h3>{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
