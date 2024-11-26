import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h3>{product.title}</h3>
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
      />
      <p>{product.description}</p>
      <p><strong>Price: </strong>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
