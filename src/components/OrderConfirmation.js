import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = ({ orderDetails }) => {
  if (!orderDetails) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">No Order Found</h2>
        <Link 
          to="/" 
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="text-center mb-8">
          <svg 
            className="mx-auto mb-4 h-16 w-16 text-green-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h2 className="text-3xl font-bold text-green-600">Order Confirmed!</h2>
          <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <h3 className="font-semibold mb-2">Shipping Details</h3>
            <p>{orderDetails.firstName} {orderDetails.lastName}</p>
            <p>{orderDetails.address}</p>
            <p>{orderDetails.city}, {orderDetails.zipCode}</p>
            <p>{orderDetails.email}</p>
            <p>{orderDetails.phone}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Order Summary</h3>
            {orderDetails.items.map(item => (
              <div key={item.id} className="flex justify-between mb-1">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t mt-2 pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>₹{orderDetails.total}</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Order Date: {orderDetails.orderDate}
          </p>
          <p className="text-gray-600 mb-4">
            Payment Method: {orderDetails.paymentMethod.charAt(0).toUpperCase() + orderDetails.paymentMethod.slice(1)} Card
          </p>
          <Link 
            to="/" 
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
