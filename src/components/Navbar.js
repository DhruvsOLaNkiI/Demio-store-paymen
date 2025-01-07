import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount, openCart }) => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Dhruve Demo Store
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/checkout" 
              className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md"
            >
              Checkout
            </Link>
            <button 
              onClick={openCart}
              className="relative p-2 text-gray-400 hover:text-gray-600"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
