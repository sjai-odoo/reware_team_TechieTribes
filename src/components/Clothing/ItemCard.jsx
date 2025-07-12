import { Link } from 'react-router-dom';

export default function ItemCard({ item }) {
  return (
    <Link to={`/items/${item.id}`} className="block hover:no-underline">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          {item.images?.[0] ? (
            <img 
              src={item.images[0]} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500">Item Image</span>
          )}
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Size: {item.size}</span>
            <span>Condition: {item.condition}</span>
          </div>
          <div className="mt-auto flex justify-between items-center">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
              {item.points} pts
            </span>
            <span className="text-green-600 hover:text-green-800 text-sm font-medium">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}