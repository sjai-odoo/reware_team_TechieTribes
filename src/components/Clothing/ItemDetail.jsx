import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ItemDetail() {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/items/${id}`);
        setItem(response.data);
      } catch (err) {
        setError('Failed to load item details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!item) return <div className="text-center py-8">Item not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img 
              src={item.images?.[0] || '/placeholder-item.jpg'} 
              alt={item.title} 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {item.images?.map((img, index) => (
              <div key={index} className="bg-gray-100 rounded overflow-hidden h-24">
                <img 
                  src={img} 
                  alt={`${item.title} ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Item Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
          <div className="flex items-center mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2">
              {item.points} pts
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {item.category}
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-medium text-gray-500">Size</h3>
              <p>{item.size}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Condition</h3>
              <p>{item.condition}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Category</h3>
              <p>{item.category}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Availability</h3>
              <p>{item.available ? 'Available' : 'Unavailable'}</p>
            </div>
          </div>

          {/* Action Buttons */}
          {currentUser ? (
            <div className="flex space-x-4 mb-8">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex-1">
                Request Swap
              </button>
              {currentUser.points >= item.points ? (
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex-1">
                  Redeem with Points
                </button>
              ) : (
                <button 
                  className="bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-medium flex-1 cursor-not-allowed"
                  disabled
                >
                  Need {item.points - currentUser.points} more pts
                </button>
              )}
            </div>
          ) : (
            <div className="mb-8">
              <Link 
                to="/login" 
                className="block text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                Sign In to Swap
              </Link>
            </div>
          )}

          {/* Seller Information */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Uploaded by</h3>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                <span className="text-gray-600">
                  {item.seller?.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div>
                <p className="font-medium">{item.seller?.name || 'Unknown User'}</p>
                {item.seller?.joinDate && (
                  <p className="text-sm text-gray-500">
                    Member since {new Date(item.seller.joinDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}