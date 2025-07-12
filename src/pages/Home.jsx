import { Link } from 'react-router-dom';
import Carousel from '../components/Common/Carousel';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { currentUser } = useAuth();
  
  const featuredItems = [
    { id: 1, title: "Summer Dress", image: "/images/dress.jpg", points: 30, category: "Dresses" },
    { id: 2, title: "Denim Jacket", image: "/images/jacket.jpg", points: 45, category: "Outerwear" },
    { id: 3, title: "Casual Sneakers", image: "/images/sneakers.jpg", points: 35, category: "Footwear" },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Animated Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-white overflow-hidden">
        {/* Floating circles background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-green-100 opacity-30 animate-float-1"></div>
          <div className="absolute top-1/3 right-20 w-40 h-40 rounded-full bg-green-200 opacity-20 animate-float-2"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-green-300 opacity-20 animate-float-3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
              <span className="relative inline-block">
                Re<span className="text-green-600">Wear</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-green-200/50 -z-10 rounded-full animate-pulse"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Where <span className="font-semibold text-green-600">sustainable fashion</span> meets community
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-100">
            {!currentUser ? (
              <>
                <Link 
                  to="/browse" 
                  className="relative overflow-hidden px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-500 group"
                >
                  <span className="relative z-10">Browse Items</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
                </Link>
                <Link 
                  to="/dashboard" 
                  className="relative overflow-hidden px-8 py-4 rounded-full bg-white text-green-600 border-2 border-green-600 font-medium shadow-md hover:shadow-lg transition-all duration-500 group"
                >
                  <span className="relative z-10">Sign In</span>
                  <span className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/browse" 
                  className="relative overflow-hidden px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-500 group"
                >
                  <span className="relative z-10">Start Swapping</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
                </Link>
                <Link 
                  to="/dashboard" 
                  className="relative overflow-hidden px-8 py-4 rounded-full bg-white text-green-600 border-2 border-green-600 font-medium shadow-md hover:shadow-lg transition-all duration-500 group"
                >
                  <span className="relative z-10">My Dashboard</span>
                  <span className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured Items Wave Section */}
      <section className="relative py-16 bg-white">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg 
            className="relative block w-full h-12 md:h-20" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-green-50"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="inline-block pb-2 border-b-4 border-green-200 px-1">Featured Items</span>
          </h2>
          <div className="px-4 animate-fade-in-up delay-200">
            <Carousel items={featuredItems} />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="relative inline-block">
              How ReWear Works
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-green-200/50 rounded-full animate-pulse"></span>
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "List Your Items",
                description: "Upload photos and details of clothing you no longer need.",
                icon: "📸",
                color: "bg-green-100"
              },
              {
                title: "Earn Points",
                description: "Get points when someone selects your item for exchange.",
                icon: "🔄",
                color: "bg-yellow-100"
              },
              {
                title: "Redeem or Swap",
                description: "Use points to get new items or arrange direct swaps.",
                icon: "🎁",
                color: "bg-blue-100"
              }
            ].map((step, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden ${step.color}`}
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-white"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-700 transition-colors duration-500">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { value: "1K+", label: "Items Shared", emoji: "👕" },
              { value: "500+", label: "Happy Members", emoji: "😊" },
              { value: "10K+", label: "Points Exchanged", emoji: "🔄" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-white to-green-50 border border-green-100 hover:border-green-200 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-md"
              >
                <div className="text-4xl mb-4 animate-bounce">{stat.emoji}</div>
                <div className="text-5xl font-bold text-green-700 mb-2">{stat.value}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-20 bg-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSI+PC9yZWN0Pjwvc3ZnPg==')" }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">"</div>
            <blockquote className="text-xl md:text-2xl italic mb-10 leading-relaxed">
              ReWear transformed how I think about fashion. I've refreshed my wardrobe sustainably while connecting with an amazing community of like-minded individuals.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-14 h-14 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-xl">
                JD
              </div>
              <div>
                <p className="font-medium text-white">Jane Doe</p>
                <p className="text-green-200">ReWear Member since 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}