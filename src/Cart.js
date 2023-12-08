import React from 'react';
import Calculate from "./Calculate.js";
import'./App.css';



function Cart({ cart, onRemoveFromCart }) {
  return (
    <div className="cart">
      <center>
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name}
              <img src={item.image} style={{ height: '100px', width: '100px' }} alt={item.name} />
              {item.price}
              <button onClick={() => onRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={() => Calculate(cart)}>Proceed</button>
      </center>
    </div>
  );
}

export default Cart;