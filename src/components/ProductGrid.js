import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Classic Embroidered Kurta",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1589156280159-3c66cae1f8a8",
    category: "Men's Wear",
    description: "A classic embroidered kurta perfect for traditional occasions.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Blue', 'Cream']
  },
  {
    id: 2,
    name: "Elegant Silk Saree",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1617195737496-f41c57b1484b",
    category: "Women's Wear",
    description: "An elegant silk saree with intricate design and rich texture.",
    sizes: ['Free Size'],
    colors: ['Red', 'Green', 'Gold']
  },
  {
    id: 3,
    name: "Modern Printed Shirt",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1602810318383-e5de5c871ebb",
    category: "Men's Wear",
    description: "A modern printed shirt perfect for casual outings.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'White', 'Black']
  },
  {
    id: 4,
    name: "Designer Lehenga Choli",
    price: 6000,
    imageUrl: "https://images.unsplash.com/photo-1585487000160-6ebcfcf29d36",
    category: "Women's Wear",
    description: "A stunning designer lehenga choli for special occasions.",
    sizes: ['S', 'M', 'L'],
    colors: ['Pink', 'Purple', 'Maroon']
  },
  {
    id: 5,
    name: "Casual Cotton Kurti",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1617137984095-74c4e695ca5d",
    category: "Women's Wear",
    description: "A comfortable and stylish cotton kurti for everyday wear.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Yellow', 'Green', 'Blue']
  },
  {
    id: 6,
    name: "Formal Blazer",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1611312449408-d198b1d7d8f4",
    category: "Men's Wear",
    description: "A sophisticated formal blazer for professional settings.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Black', 'Gray']
  }
];

const ProductGrid = ({ addToCart }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>
      
      <div className="flex justify-center mb-8">
        {['All', "Men's Wear", "Women's Wear"].map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`mx-2 px-4 py-2 rounded ${
              filter === category 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div 
            key={product.id} 
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-bold">₹{product.price}</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation when clicking add to cart
                    addToCart(product);
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { };
export default ProductGrid;
