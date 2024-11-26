import React, { useState, useEffect } from 'react';
import ProductList from './ProductList'; 
import Cart from './Cart'; 

const App = () => {
  const [cart, setCart] = useState([]);

  // Cargar el carrito desde localStorage al cargar la aplicación
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));  // Guardamos en localStorage
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));  // Guardamos en localStorage
    }
  };

  // Función para manejar cambios de cantidad en el carrito
  const updateCartQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;  // Evitar cantidades menores a 1
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));  // Guardamos en localStorage
  };

  return (
    <div>
      <h1>Store</h1>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cart} updateCartQuantity={updateCartQuantity} />
    </div>
  );
};

export default App;
