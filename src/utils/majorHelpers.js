import { majors } from '../data/majors';

export const searchMajors = (keyword, category) => {
  return majors.filter(major => {
    const matchesKeyword = major.name.toLowerCase().includes(keyword.toLowerCase()) ||
      major.description.toLowerCase().includes(keyword.toLowerCase());
    const matchesCategory = category === 'all' || major.category === category;
    return matchesKeyword && matchesCategory;
  });
};

export const getMajorById = (id) => {
  return majors.find(major => major.id === id);
};
