import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="fixed flex items-center bg-gray-100 rounded-md shadow-lg p-2 mx-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500 ml-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.35-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
      </svg>
      <input
        type="text"
        placeholder="맛집 이름을 검색해보세요"
        className="bg-gray-100 outline-none ml-2 w-full text-gray-700"
      />
    </div>
  );
};

export default SearchBar;



//맛집 이름을 검색해보세요