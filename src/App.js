import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import ProductDetail from './components/ProductDetail';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + 1} 
          : item
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(cartItems.map(item => 
        item.id === productId 
          ? {...item, quantity: newQuantity} 
          : item
      ));
    } else {
      removeFromCart(productId);
    }
  };

  const handleOrderConfirmation = (orderInfo) => {
    setOrderDetails(orderInfo);
    setCartItems([]); // Clear cart after order
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar 
          cartItemCount={cartItems.length} 
          openCart={() => setIsCartOpen(true)} 
        />
        
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ProductGrid addToCart={addToCart} />
            </>
          } />
          <Route 
            path="/product/:id" 
            element={<ProductDetail addToCart={addToCart} />} 
          />
          <Route 
            path="/checkout" 
            element={
              <Checkout 
                cartItems={cartItems} 
                onOrderConfirm={handleOrderConfirmation} 
              />
            } 
          />
          <Route 
            path="/order-confirmation" 
            element={
              <OrderConfirmation orderDetails={orderDetails} />
            } 
          />
        </Routes>

        {isCartOpen && (
          <Cart 
            items={cartItems} 
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            closeCart={() => setIsCartOpen(false)}
          />
        )}
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
