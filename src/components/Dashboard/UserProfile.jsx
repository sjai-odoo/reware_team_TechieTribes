import { useAuth } from '../../contexts/AuthContext';

export default function UserProfile() {
  const { currentUser } = useAuth();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">My Profile</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-medium text-gray-500 mb-1">Name</h3>
          <p>{currentUser.name}</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-500 mb-1">Email</h3>
          <p>{currentUser.email}</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-500 mb-1">Member Since</h3>
          <p>April 2023</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-500 mb-1">Points Balance</h3>
          <p className="text-green-600 font-bold">{currentUser.points} pts</p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-medium mb-4">Account Settings</h3>
        <div className="space-y-4">
          <button className="w-full md:w-auto bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50">
            Change Password
          </button>
          <button className="w-full md:w-auto bg-white border border-red-300 text-red-600 py-2 px-4 rounded-md hover:bg-red-50">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}