const mockSwaps = [
  { id: 1, item: "Floral Summer Dress", type: "Points Redemption", points: -35, date: "2023-05-12", status: "Completed" },
  { id: 2, item: "Denim Jacket", type: "Direct Swap", points: 0, date: "2023-05-08", status: "Completed" },
  { id: 3, item: "Striped T-Shirt", type: "Points Earned", points: +20, date: "2023-04-28", status: "Completed" },
];

export default function SwapHistory() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Swap History</h2>
      
      <div className="space-y-4">
        {mockSwaps.map(swap => (
          <div key={swap.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">{swap.item}</h3>
                <p className="text-sm text-gray-500">{swap.type} • {swap.date}</p>
              </div>
              <div className="text-right">
                <span className={`font-medium ${
                  swap.points > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {swap.points > 0 ? '+' : ''}{swap.points} pts
                </span>
                <span className={`block text-xs ${
                  swap.status === "Completed" ? "text-green-600" : "text-yellow-600"
                }`}>
                  {swap.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}