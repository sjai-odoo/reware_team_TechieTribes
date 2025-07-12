import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import UserProfile from '../components/Dashboard/UserProfile';
import UserItems from '../components/Dashboard/UserItems';
import SwapHistory from '../components/Dashboard/SwapHistory';
import AddItemForm from '../components/Clothing/AddItemForm';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [showAddItem, setShowAddItem] = useState(false);

  if (!currentUser) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Please sign in to access your dashboard</h2>
        <p className="text-gray-600 mb-6">You need to be logged in to view this page.</p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium">
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                <span className="text-2xl text-gray-600">{currentUser.name.charAt(0)}</span>
              </div>
              <div>
                <h3 className="font-bold">{currentUser.name}</h3>
                <p className="text-sm text-gray-600">{currentUser.email}</p>
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-600">Points Balance</p>
              <p className="text-2xl font-bold text-green-600">{currentUser.points} pts</p>
            </div>
            <button 
              onClick={() => setShowAddItem(true)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg mb-4"
            >
              List New Item
            </button>
          </div>

          <nav className="bg-white rounded-lg shadow-md p-4">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-3 py-2 rounded ${activeTab === 'profile' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
                >
                  My Profile
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('items')}
                  className={`w-full text-left px-3 py-2 rounded ${activeTab === 'items' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
                >
                  My Items
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('swaps')}
                  className={`w-full text-left px-3 py-2 rounded ${activeTab === 'swaps' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
                >
                  Swap History
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="md:w-3/4">
          {showAddItem ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">List a New Item</h2>
                <button 
                  onClick={() => setShowAddItem(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <AddItemForm onSuccess={() => setShowAddItem(false)} />
            </div>
          ) : (
            <>
              {activeTab === 'profile' && <UserProfile />}
              {activeTab === 'items' && <UserItems />}
              {activeTab === 'swaps' && <SwapHistory />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}