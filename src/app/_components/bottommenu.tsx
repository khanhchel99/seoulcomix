// components/BottomMenu.tsx
import React from 'react';
const BottomMenu: React.FC = () => {
  return (
    <div className="fixed  bottom-0 left-0 right-0 bg-white shadow-lg p-4">
      <div className="max-w-[700px] mx-auto flex justify-around pt-0">
        <button className="flex flex-col items-center">
          <span className="text-xl">
            <img src="/images/home.svg" alt="Home" className="w-6 h-6" />
          </span>
          <span className="text-xs text-gray-600">홈</span>
        </button>

        <button className="flex flex-col items-center">
          <span className="text-xl">
            <img src="/images/search.svg" alt="Search" className="w-6 h-6" />
          </span>
          <span className="text-xs text-gray-600">검색</span> {/* Red color for search */}
        </button>


        <button className="flex flex-col items-center">
          <span className="text-xl">
            <img src="/images/message.svg" alt="Feed" className="w-6 h-6" />
          </span>
          <span className="text-xs text-gray-600">피드</span>
        </button>

        <button className="flex flex-col items-center">
          <span className="text-xl">
            <img src="/images/calendar.svg" alt="Reservation" className="w-6 h-6" />
          </span>
          <span className="text-xs text-gray-600">내 예약</span>
        </button>

        <button className="flex flex-col items-center">
          <span className="text-xl">
            <img src="/images/menu.svg" alt="Menu" className="w-6 h-6" />
          </span>
          <span className="text-xs text-gray-600">메뉴</span>
        </button>
      </div>
    </div>

  );
};

export default BottomMenu;
