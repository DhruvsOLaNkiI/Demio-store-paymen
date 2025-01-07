import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ items, removeFromCart, updateQuantity, closeCart }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="text-gray-600 hover:text-gray-900"
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
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {items.map(item => (
              <div 
                key={item.id} 
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded mr-4" 
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-200 px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6 flex justify-between items-center">
              <h3 className="text-xl font-bold">Total</h3>
              <p className="text-xl font-bold">₹{total}</p>
            </div>
            <Link 
              to="/checkout" 
              onClick={closeCart}
              className="w-full bg-blue-500 text-white py-3 rounded mt-4 hover:bg-blue-600 text-center"
            >
              Proceed to Checkout
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
