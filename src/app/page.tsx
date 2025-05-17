import React from 'react';

function App() {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white min-h-screen">
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 backdrop-blur-lg rounded-full shadow-2xl px-10 py-5 flex items-center space-x-10 z-50 border border-purple-500/50">
        <a href="#home" className="hover:text-purple-400 transition duration-300">Home</a>
        <a href="#features" className="hover:text-purple-400 transition duration-300">Features</a>
        <a href="#market" className="hover:text-purple-400 transition duration-300">Marketplace</a>
        <a href="#about" className="hover:text-purple-400 transition duration-300">About</a>
        <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-6 py-3 rounded-full transition duration-300 text-sm font-semibold">Connect Wallet</a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6" id="home">
        {/* Enhanced SVG Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="heroGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#1e0033" /> {/* Deep Purple */}
                <stop offset="50%" stopColor="#0b001a" /> {/* Darker Purple/Black */}
                <stop offset="100%" stopColor="#000000" /> {/* Black */}
              </radialGradient>
              {/* Adding some animated stars or particles */}
              <pattern id="stars" patternUnits="userSpaceOnUse" width="100" height="100">
                <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.5)">
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0s"/>
                </circle>
                <circle cx="50" cy="70" r="0.5" fill="rgba(255,255,255,0.3)">
                  <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="1s"/>
                </circle>
                 <circle cx="80" cy="30" r="0.8" fill="rgba(255,255,255,0.4)">
                  <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGradient)" />
            <rect width="100%" height="100%" fill="url(#stars)" opacity="0.5" />
          </svg>
        </div>
        {/* Floating Web3 SVG Robot - Enhanced */}
        <svg
          className="relative w-80 h-80 mb-10 animate-float" // Added animate-float (define in globals.css)
          viewBox="0 0 120 120" // Increased viewBox for more detail
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7e22ce" /> {/* Purple */}
              <stop offset="50%" stopColor="#be185d" /> {/* Pink */}
              <stop offset="100%" stopColor="#f472b6" /> {/* Lighter Pink */}
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Main body with glow */}
          <circle cx="60" cy="60" r="50" fill="url(#robotGradient)" filter="url(#glow)" />
          {/* Inner details - example of more complexity */}
          <circle cx="60" cy="60" r="40" stroke="#fff" strokeOpacity="0.2" strokeWidth="2"/>
          <path d="M60 20 V40 M40 60 H80 M60 80 V100" stroke="#fff" strokeOpacity="0.3" strokeWidth="1.5"/>

          {/* "Eyes" - more expressive */}
          <ellipse cx="45" cy="50" rx="5" ry="8" fill="white" />
          <ellipse cx="75" cy="50" rx="5" ry="8" fill="white" />
          <circle cx="45" cy="50" r="2" fill="#1e0033" className="animate-pulse-eye" /> {/* Pulsing pupil */}
          <circle cx="75" cy="50" r="2" fill="#1e0033" className="animate-pulse-eye" /> {/* Pulsing pupil */}

          {/* "Mouth" - slightly different */}
          <rect x="50" y="70" width="20" height="5" rx="2" fill="rgba(255,255,255,0.8)" />

          {/* "Antenna" with animation */}
          <line x1="60" y1="10" x2="60" y2="25" stroke="white" strokeWidth="2.5" />
          <circle cx="60" cy="10" r="4" fill="white">
            <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite"/>
          </circle>
        </svg>
        <h1 className="text-7xl font-extrabold mb-6 drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Enter the NFT Cosmos
        </h1>
        <p className="max-w-3xl text-xl text-gray-300 mb-10 drop-shadow-md">
          Explore, trade, and own the future of digital art on a decentralized, cutting-edge marketplace.
        </p>
        <a href="#market" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-12 py-4 rounded-full text-xl font-bold transition duration-300 shadow-2xl transform hover:scale-105">
          Discover Collections
        </a>
      </section>

      {/* NFT Collection Section - Enhanced Styling */}
      <section className="py-24 bg-gray-950" id="market"> {/* Slightly darker bg for contrast */}
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-purple-500/40 transform hover:-translate-y-2 transition-all duration-300 border border-purple-500/30 group"
              >
                <div className="aspect-square bg-gray-700 rounded-2xl mb-6 overflow-hidden">
                  {/* Placeholder for NFT image - you can replace this with actual images */}
                  <img src={`https://picsum.photos/seed/${i+1}/400/400`} alt={`NFT Collection ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"/>
                </div>
                <h3 className="text-3xl font-semibold mb-3 text-white">Cyber Punks #{i + 1}</h3>
                <p className="text-gray-400 mb-5">Unique generative art from the digital frontier.</p>
                <a href="#details" className="mt-4 inline-block text-purple-400 hover:text-pink-400 font-semibold group-hover:underline">
                  View Details
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Enhanced Web3 Style */}
      <footer className="bg-black/50 backdrop-blur-lg text-gray-400 py-16 px-6 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 items-start">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">NFT Cosmos</h3>
            <p className="text-sm">
              Pioneering the next wave of digital collectibles and decentralized art.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-purple-300 transition">Home</a></li>
              <li><a href="#market" className="hover:text-purple-300 transition">Marketplace</a></li>
              <li><a href="#features" className="hover:text-purple-300 transition">Features</a></li>
              <li><a href="#about" className="hover:text-purple-300 transition">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-purple-300 transition">Discord</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Twitter / X</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Blog</a></li>
              <li><a href="#" className="hover:text-purple-300 transition">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-sm">Email: contact@nftcosmos.io</p>
            <p className="text-sm">Support: support@nftcosmos.io</p>
            {/* Add social media icons here if you have them */}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700/50 text-center text-xs">
          &copy; {new Date().getFullYear()} NFT Cosmos. All Rights Reserved. Built on the Interchain.
        </div>
      </footer>
    </div>
  );
}

export default App;
