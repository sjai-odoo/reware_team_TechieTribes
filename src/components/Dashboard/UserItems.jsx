import { Link } from 'react-router-dom';

const mockUserItems = [
  { id: 1, title: "Floral Summer Dress", points: 35, status: "Available", date: "2023-05-10" },
  { id: 2, title: "Denim Jacket", points: 45, status: "Pending Approval", date: "2023-05-15" },
  { id: 3, title: "Striped T-Shirt", points: 20, status: "In Swap", date: "2023-04-28" },
];

export default function UserItems() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">My Listed Items</h2>
        <span className="text-sm text-gray-500">{mockUserItems.length} items</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockUserItems.map(item => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                      <span className="text-gray-500 text-xs">Image</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.title}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    {item.points} pts
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.status === "Available" ? "bg-blue-100 text-blue-800" :
                    item.status === "Pending Approval" ? "bg-yellow-100 text-yellow-800" :
                    "bg-purple-100 text-purple-800"
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link to={`/browse/${item.id}`} className="text-green-600 hover:text-green-900 mr-3">View</Link>
                  <button className="text-red-600 hover:text-red-900">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}