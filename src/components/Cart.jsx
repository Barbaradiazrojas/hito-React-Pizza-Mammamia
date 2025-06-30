import React, { useState } from 'react';
import { pizzaCart } from './pizzas';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(currentCart =>
      currentCart.map(pizza =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(currentCart =>
      currentCart
        .map(pizza =>
          pizza.id === id ? { ...pizza, quantity: Math.max(pizza.quantity - 1, 0) } : pizza
        )
        .filter(pizza => pizza.quantity > 0)
    );
  };

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

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
                <span>{pizza.quantity}</span>
                <button onClick={() => increaseQuantity(pizza.id)} className="increase-button">+</button>
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
