// components/Categories.tsx
import React from 'react';

const categories = ['전체', '스시·해산물', '장어', '덮밥', '탄카츠·쿠시카츠'];

const Categories: React.FC = () => {
  return (
    <div className="flex space-x-4 px-4 py-2 overflow-x-auto scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          className="whitespace-nowrap px-4 py-2 rounded-full  text-sm font-medium hover:bg-gray-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
