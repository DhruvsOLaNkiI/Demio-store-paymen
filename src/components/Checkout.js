import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, onOrderConfirm }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit'
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep = () => {
    switch(step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.address && formData.city && formData.zipCode;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    } else {
      alert('Please fill in all required fields');
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderInfo = {
      ...formData,
      items: cartItems,
      total: total,
      orderDate: new Date().toLocaleDateString()
    };
    onOrderConfirm(orderInfo);
    navigate('/order-confirmation');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Checkout</h2>
        
        {/* Progress Indicator */}
        <div className="flex justify-between mb-8">
          {['Personal Info', 'Shipping Details', 'Payment'].map((label, index) => (
            <div 
              key={label} 
              className={`w-1/3 text-center py-2 ${
                step === index + 1 
                  ? 'bg-blue-500 text-white' 
                  : step > index + 1 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Personal Information Step */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full p-2 border rounded"
                  required 
                />
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full p-2 border rounded"
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full p-2 border rounded col-span-2"
                  required 
                />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded col-span-2"
                  required 
                />
              </div>
              <div className="flex justify-end mt-4">
                <button 
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Shipping Details Step */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street Address"
                  className="w-full p-2 border rounded col-span-2"
                  required 
                />
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="w-full p-2 border rounded"
                  required 
                />
                <input 
                  type="text" 
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="Zip Code"
                  className="w-full p-2 border rounded"
                  required 
                />
              </div>
              <div className="flex justify-between mt-4">
                <button 
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300"
                >
                  Previous
                </button>
                <button 
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Payment Step */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Select Payment Method</h4>
                <div className="grid grid-cols-3 gap-4">
                  {['credit', 'debit', 'paypal'].map(method => (
                    <label 
                      key={method}
                      className={`p-4 border rounded cursor-pointer ${
                        formData.paymentMethod === method 
                          ? 'bg-blue-100 border-blue-500' 
                          : 'bg-white'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="paymentMethod"
                        value={method}
                        checked={formData.paymentMethod === method}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      {method.charAt(0).toUpperCase() + method.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button 
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300"
                >
                  Previous
                </button>
                <button 
                  type="submit"
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Checkout;
