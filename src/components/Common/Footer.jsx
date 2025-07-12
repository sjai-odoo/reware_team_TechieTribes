export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-green-400">Re</span>Wear
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Promoting sustainable fashion through community clothing exchange.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'pinterest'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-all duration-300">
                    <span className="text-lg">{
                      social === 'twitter' ? '🐦' :
                      social === 'facebook' ? '📘' :
                      social === 'instagram' ? '📷' : '📌'
                    }</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Browse', 'How It Works', 'FAQ'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Legal</h4>
            <ul className="space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Community Guidelines'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✉️</span>
                <a href="mailto:support@rewear.com" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  support@rewear.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">📞</span>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">📍</span>
                <span className="text-gray-400">123 Green St, Eco City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} ReWear. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Sustainability Pledge
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}