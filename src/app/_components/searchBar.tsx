// components/SearchBar.tsx
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="맛집 이름을 검색해보세요"
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
      />
    </div>
  );
};

export default SearchBar;
