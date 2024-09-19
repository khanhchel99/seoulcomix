import React from 'react';
import SearchBar from '../app/_components/searchBar';
import Categories from '../app/_components/categories';
import BottomMenu from '../app/_components/bottommenu';
import Restaurants from './_components/restaurant';


const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Search Bar */}
      <SearchBar />

      {/* Categories */}
      <Categories />

      {/* Scrollable List of items */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <Restaurants />
        <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
          <img src="/path-to-image.jpg" alt="item" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">카쿠라자카 이시카와</h3>
            <p className="text-sm text-gray-600">최고의 오마카세</p>
            <span className="text-sm text-yellow-500">⭐ 4.8 (2)</span>
          </div>
        </div>

        <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
          <img src="/path-to-image.jpg" alt="item" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">스시하루</h3>
            <p className="text-sm text-gray-600">오사카 나카노시마</p>
            <span className="text-sm text-yellow-500">⭐ 0 (0)</span>
          </div>
        </div>

        <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
          <img src="/path-to-image.jpg" alt="item" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">스시하루</h3>
            <p className="text-sm text-gray-600">오사카 나카노시마</p>
            <span className="text-sm text-yellow-500">⭐ 0 (0)</span>
          </div>
        </div>

        <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
          <img src="/path-to-image.jpg" alt="item" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">스시하루</h3>
            <p className="text-sm text-gray-600">오사카 나카노시마</p>
            <span className="text-sm text-yellow-500">⭐ 0 (0)</span>
          </div>
        </div>

        {/* Add more items as needed */}
      </div>

      {/* Bottom Navigation */}
      <BottomMenu />
    </div>
  );
};

export default Home;