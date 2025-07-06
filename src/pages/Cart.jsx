import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext'; // Asegúrate de que la ruta sea correcta

const Cart = () => {
  const { cart, addToCart, removeFromCart, calculateTotal } = useContext(CartContext);

  const increaseQuantity = (pizza) => {
    addToCart(pizza);
  };

  const decreaseQuantity = (id) => {
    removeFromCart(id);
  };

  const total = calculateTotal();

  return (
    <div className="cart-container">
      <h2>Detalles del pedido:</h2>
      <div className="cart-items">
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{pizza.name}</h3>
              <p>Precio: ${Math.round(pizza.price)}</p>
              <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
              <div className="cart-item-actions">
                <button onClick={() => decreaseQuantity(pizza.id)} className="decrease-button">-</button>
                <span>{pizza.quantity || 1}</span>
                <button onClick={() => increaseQuantity(pizza)} className="increase-button">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${Math.round(total)}</h3>
      <button className="checkout-button">Pagar</button>
    </div>
  );
};

export default Cart;
