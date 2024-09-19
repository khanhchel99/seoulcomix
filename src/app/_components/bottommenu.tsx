// components/BottomMenu.tsx
import React from 'react';

const BottomMenu: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-around">
      <button className="flex flex-col items-center">
        <span className="text-xl">🏠</span>
        <span className="text-xs">유</span>
      </button>
      <button className="flex flex-col items-center">
        <span className="text-xl">🔍</span>
        <span className="text-xs">검색</span>
      </button>
      <button className="flex flex-col items-center">
        <span className="text-xl">📸</span>
        <span className="text-xs">피드</span>
      </button>
      <button className="flex flex-col items-center">
        <span className="text-xl">👤</span>
        <span className="text-xs">마이</span>
      </button>
    </div>
  );
};

export default BottomMenu;
