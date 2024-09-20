// components/Categories.tsx
// import React from 'react';

// const categories = ['전체', '스시·해산물', '장어', '덮밥', '탄카츠·쿠시카츠'];

// const Categories: React.FC = () => {
//   return (
//     <div className="flex space-x-4 px-4 py-0 overflow-x-auto scrollbar-hide mr-4">
//       {categories.map((category) => (
//         <button
//           key={category}
//           className="whitespace-nowrap px-4 py-2 rounded-full  text-sm font-medium hover:bg-gray-300 rounded-md"
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Categories;
import React from 'react';

enum STORE_CATEGORY {
  SUSHI = 'SUSHI',
  UNAGI = 'UNAGI',
  TEMPURA = 'TEMPURA',
  TONKATSU = 'TONKATSU',
  YAKITORI = 'YAKITORI',
  SUKIYAKI = 'SUKIYAKI',
  SOBA = 'SOBA',
  RAMEN = 'RAMEN',
  YAKISOBA = 'YAKISOBA',
  OKONOMIYAKI = 'OKONOMIYAKI',
  DONBURI = 'DONBURI',
  ODEN = 'ODEN',
  KAISEKI = 'KAISEKI',
  HAMBAGU = 'HAMBAGU',
  TEPPANYAKI = 'TEPPANYAKI',
  CURRY = 'CURRY',
  YAKINIKU = 'YAKINIKU',
  NABE = 'NABE',
  CAFE = 'CAFE',
  IZAKAYA = 'IZAKAYA',
  OTHER = 'OTHER',
}

const textByStoreCategory = {
  [STORE_CATEGORY.SUSHI]: '스시·해산물',
  [STORE_CATEGORY.UNAGI]: '장어',
  [STORE_CATEGORY.TEMPURA]: '덴푸라',
  [STORE_CATEGORY.TONKATSU]: '돈카츠·쿠시카츠',
  [STORE_CATEGORY.YAKITORI]: '야키토리·꼬치',
  [STORE_CATEGORY.SUKIYAKI]: '스키야키·샤브샤브',
  [STORE_CATEGORY.SOBA]: '소바·우동',
  [STORE_CATEGORY.RAMEN]: '라멘·츠케멘',
  [STORE_CATEGORY.YAKISOBA]: '야키소바',
  [STORE_CATEGORY.OKONOMIYAKI]: '오코노미야키·타코야키',
  [STORE_CATEGORY.DONBURI]: '덮밥',
  [STORE_CATEGORY.ODEN]: '오뎅',
  [STORE_CATEGORY.KAISEKI]: '가이세키·일식',
  [STORE_CATEGORY.HAMBAGU]: '함바그·오므라이스',
  [STORE_CATEGORY.TEPPANYAKI]: '스테이크·철판요리',
  [STORE_CATEGORY.CURRY]: '카레',
  [STORE_CATEGORY.YAKINIKU]: '야키니쿠·호르몬',
  [STORE_CATEGORY.NABE]: '나베',
  [STORE_CATEGORY.CAFE]: '카페·디저트',
  [STORE_CATEGORY.IZAKAYA]: '이자카야·바',
  [STORE_CATEGORY.OTHER]: '기타 일본 음식',
};

const Categories: React.FC = () => {
  return (
    <div className="flex space-x-4 px-4 py-0 overflow-x-auto scrollbar-hide mx-4">
      {Object.values(STORE_CATEGORY).map((category) => (
        <button
          key={category}
          className="whitespace-nowrap px-4 py-0.5 rounded-full text-sm font-medium hover:bg-gray-300 ml-2"
        >
          {textByStoreCategory[category]}
        </button>
      ))}
    </div>
  );
};

export default Categories;
