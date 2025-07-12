import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import axios from 'axios';

export default function ProductPage() {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to load product');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    try {
      await axios.post(
        'http://localhost:5000/api/cart',
        { productId: id, size: selectedSize, quantity },
        { withCredentials: true }
      );
      alert('Item added to cart!');
    } catch (err) {
      setError('Failed to add to cart');
      console.error(err);
    }
  };

  const handleRequestSwap = async () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    try {
      await axios.post(
        'http://localhost:5000/api/swaps/request',
        { productId: id },
        { withCredentials: true }
      );
      alert('Swap request sent!');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to request swap');
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!product) return <div className="text-center py-8">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img 
              src={product.images[0]} 
              alt={product.title} 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, index) => (
              <div key={index} className="bg-gray-100 rounded overflow-hidden h-24">
                <img src={img} alt={`${product.title} ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="flex items-center mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2">
              {product.points} pts
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {product.category}
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-medium text-gray-500">Condition</h3>
              <p>{product.condition}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Brand</h3>
              <p>{product.brand || 'Unknown'}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Availability</h3>
              <p>{product.available ? 'Available' : 'Unavailable'}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500">Uploaded</h3>
              <p>{new Date(product.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Select Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size 
                        ? 'bg-green-100 border-green-500' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-4">
            {product.available && (
              <>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleRequestSwap}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
                >
                  Request Swap
                </button>
              </>
            )}
            {!product.available && (
              <button
                disabled
                className="w-full bg-gray-400 text-white py-3 rounded-lg font-medium cursor-not-allowed"
              >
                Currently Unavailable
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Seller Information */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">About the Seller</h2>
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mr-4">
            <span className="text-2xl text-gray-600">
              {product.seller.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="font-medium">{product.seller.name}</h3>
            <p className="text-sm text-gray-500">
              Member since {new Date(product.seller.joinDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {product.seller.itemsListed || 0} items listed | {product.seller.rating || 'No'} ratings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}