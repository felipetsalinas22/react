import React from 'react';

const Cart = ({ cartItems, updateCartQuantity }) => {
  // Calcular el total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
              <h3>{item.title}</h3>
              <p><strong>Precio: </strong>${item.price}</p>
              <p>
                <strong>Cantidad: </strong>
                <input 
                  type="number" 
                  min="1" 
                  value={item.quantity} 
                  onChange={(e) => updateCartQuantity(item.id, Number(e.target.value))} 
                />
              </p>
            </div>
          ))}
          <h3>Total: ${calculateTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
