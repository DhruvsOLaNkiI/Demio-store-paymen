import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

// Define products directly in this file to avoid import issues
const products = [
  {
    id: 1,
    name: "Classic Embroidered Kurta",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1589156280159-3c66cae1f8a8",
    category: "Men's Wear",
    description: "A classic embroidered kurta perfect for traditional occasions.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Blue', 'Cream'],
    details: [
      'Hand Embroidered',
      'Pure Cotton Fabric',
      'Machine Washable',
      'Comfortable Fit'
    ]
  },
  {
    id: 2,
    name: "Elegant Silk Saree",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1617195737496-f41c57b1484b",
    category: "Women's Wear",
    description: "An elegant silk saree with intricate design and rich texture.",
    sizes: ['Free Size'],
    colors: ['Red', 'Green', 'Gold'],
    details: [
      'Pure Silk',
      'Hand Wash Recommended',
      'Blouse Piece Included',
      'Traditional Weave'
    ]
  },
  {
    id: 3,
    name: "Modern Printed Shirt",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1602810318383-e5de5c871ebb",
    category: "Men's Wear",
    description: "A modern printed shirt perfect for casual outings.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'White', 'Black'],
    details: [
      'Cotton Blend',
      'Machine Washable',
      'Slim Fit',
      'Unique Print Design'
    ]
  },
  {
    id: 4,
    name: "Designer Lehenga Choli",
    price: 6000,
    imageUrl: "https://images.unsplash.com/photo-1585487000160-6ebcfcf29d36",
    category: "Women's Wear",
    description: "A stunning designer lehenga choli for special occasions.",
    sizes: ['S', 'M', 'L'],
    colors: ['Pink', 'Purple', 'Maroon'],
    details: [
      'Heavy Embroidery',
      'Soft Fabric',
      'Includes Dupatta',
      'Dry Clean Recommended'
    ]
  },
  {
    id: 5,
    name: "Casual Cotton Kurti",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1617137984095-74c4e695ca5d",
    category: "Women's Wear",
    description: "A comfortable and stylish cotton kurti for everyday wear.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Yellow', 'Green', 'Blue'],
    details: [
      'Soft Cotton',
      'Breathable Fabric',
      'Machine Washable',
      'Comfortable Fit'
    ]
  },
  {
    id: 6,
    name: "Formal Blazer",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1611312449408-d198b1d7d8f4",
    category: "Men's Wear",
    description: "A sophisticated formal blazer for professional settings.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Black', 'Gray'],
    details: [
      'Premium Wool Blend',
      'Tailored Fit',
      'Dry Clean Only',
      'Classic Design'
    ]
  }
];

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Find the product by ID
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    // Create a new product object with selected options
    const productToAdd = {
      ...product,
      selectedSize,
      selectedColor
    };
    addToCart(productToAdd);
  };

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        
        <div className="product-options">
          <div className="size-selection">
            <h3>Select Size</h3>
            {product.sizes.map(size => (
              <button 
                key={size}
                className={selectedSize === size ? 'selected' : ''}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          
          <div className="color-selection">
            <h3>Select Color</h3>
            {product.colors.map(color => (
              <button 
                key={color}
                className={selectedColor === color ? 'selected' : ''}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        
        <div className="product-details">
          <h3>Product Details</h3>
          <ul>
            {product.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
