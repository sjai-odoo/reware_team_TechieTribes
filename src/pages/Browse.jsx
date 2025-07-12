import { Link } from 'react-router-dom';
import ItemCard from '../components/Clothing/ItemCard';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const mockItems = [
  { id: 1, title: "Summer Dress", image: "/images/dress.jpg", points: 30, size: "M", condition: "Like New" },
  { id: 2, title: "Denim Jacket", image: "/images/jacket.jpg", points: 45, size: "L", condition: "Good" },
  { id: 3, title: "Casual Sneakers", image: "/images/sneakers.jpg", points: 35, size: "US 9", condition: "Good" },
  { id: 4, title: "Striped T-Shirt", image: "/images/tshirt.jpg", points: 20, size: "S", condition: "Fair" },
  { id: 5, title: "Wool Sweater", image: "/images/sweater.jpg", points: 40, size: "M", condition: "Like New" },
  { id: 6, title: "Formal Trousers", image: "/images/trousers.jpg", points: 35, size: "32", condition: "Good" },
];

export default function Browse() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900 font-serif tracking-tight">Browse Items</h1>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Category Dropdown */}
          <div className="relative w-full sm:w-48">
            <select className="appearance-none w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-700 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent cursor-pointer">
              <option>All Categories</option>
              <option>Tops</option>
              <option>Bottoms</option>
              <option>Dresses</option>
              <option>Outerwear</option>
              <option>Footwear</option>
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
          
          {/* Sort Dropdown */}
          <div className="relative w-full sm:w-48">
            <select className="appearance-none w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-lg bg-white text-gray-700 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent cursor-pointer">
              <option>Sort By</option>
              <option>Newest</option>
              <option>Points (Low to High)</option>
              <option>Points (High to Low)</option>
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockItems.map(item => (
          <Link 
            to={`/browse/${item.id}`} 
            key={item.id}
            className="group transition-transform duration-200 hover:scale-[1.02]"
          >
            <ItemCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}