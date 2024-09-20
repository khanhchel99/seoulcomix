import React from 'react';
import SearchBar from '../app/_components/searchBar';
import Categories from '../app/_components/categories';
import BottomMenu from '../app/_components/bottommenu';
import Restaurants from './_components/restaurants';


const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <SearchBar />
      </div>

      {/* Categories */}
      <div className="mb-4">
        <Categories />
      </div>

      {/* Scrollable List of items */}
      <div className="flex-1 overflow-y-auto px-4 py-2 mb-16 scrollbar-hide space-y-4">
        <Restaurants />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full p-4">
        <BottomMenu />
      </div>
    </div>

  );
};

export default Home;