import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

function CartPage () {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

  return (
    <div>
        <nav>
            <button onClick={() => navigate('/ShowBooks')}>Back to Books</button>
            <h1>My Cart</h1>
        </nav>

        {cartItems.length === 0 ? (
            <p className='empty-cart-message'>No books in Cart</p>
        ) : (
            <ul className='cart-items-list'>
                {cartItems.map((item, index) => (
                    <li key={index} className='cart-item'>
                        {item.name}
                        <button className='remove-button' onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        )}   
    </div>
  )
}

export default CartPage