import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">ReWear</Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/browse" className="text-gray-600 hover:text-green-600">Browse</Link>
          
          {currentUser ? (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-green-600">Dashboard</Link>
              <button 
                onClick={logout}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
              >
                Logout
              </button>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {currentUser.points} pts
              </span>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-green-600">Login</Link>
              <Link 
                to="/signup" 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
