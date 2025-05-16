import React from 'react'

function App() {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white">
      {/* Floating Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-full shadow-xl px-8 py-4 flex space-x-8 z-50">
        <a href="#home" className="hover:text-blue-400 transition">Home</a>
        <a href="#features" className="hover:text-blue-400 transition">Features</a>
        <a href="#market" className="hover:text-blue-400 transition">Marketplace</a>
        <a href="#about" className="hover:text-blue-400 transition">About</a>
        <a href="#contact" className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-full transition">Connect Wallet</a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4" id="home">
        {/* SVG Background */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="50%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGradient)" />
        </svg>
        {/* Floating Web3 SVG Robot */}
        <svg
          className="relative w-72 h-72 mb-8 animate-bounce"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="50%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          {/* Outer circle */}
          <circle cx="50" cy="50" r="45" stroke="url(#robotGradient)" strokeWidth="5" />
          {/* "Eyes" */}
          <circle cx="40" cy="45" r="3" fill="white" />
          <circle cx="60" cy="45" r="3" fill="white" />
          {/* "Mouth" */}
          <path d="M40 60 Q50 70 60 60" stroke="white" strokeWidth="2" fill="none" />
          {/* "Antenna" */}
          <line x1="50" y1="5" x2="50" y2="20" stroke="white" strokeWidth="2" />
          <circle cx="50" cy="5" r="3" fill="white" />
        </svg>
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Discover the Future of NFTs</h1>
        <p className="max-w-2xl text-lg mb-8 drop-shadow-sm">
          Trade, collect, and showcase unique digital assets on our avant-garde web3 marketplace powered by blockchain technology.
        </p>
        <a href="#market" className="bg-blue-600 hover:bg-blue-500 px-10 py-3 rounded-full text-xl font-semibold transition shadow-lg">
          Explore Marketplace
        </a>
      </section>

      {/* NFT Collection Section */}
      <section className="py-20 bg-gray-800" id="market">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured NFT Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition duration-300">
                <div className="h-48 bg-gray-700 rounded-xl mb-4"></div>
                <h3 className="text-2xl font-semibold mb-2">NFT Collection {i + 1}</h3>
                <p className="text-gray-300">Explore unique digital art pieces and rare collectibles.</p>
                <a href="#details" className="mt-4 inline-block text-blue-400 hover:text-blue-300 font-medium">
                  View Collection
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-3">About</h3>
            <p>
              Join our community and embark on your NFT journey with cutting-edge technology and secure transactions.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#market" className="hover:text-white">Marketplace</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Contact</h3>
            <p>Email: support@nftmarket.io</p>
            <p>Twitter: @NFTMarket</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">&copy; 2025 NFT Market. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
