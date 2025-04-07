import React from 'react';
import './ShowBooks.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import library from '../Assets/images/library.jpg';
import cart from '../Assets/images/shopping-cart.png';
import menu from '../Assets/images/menu.png';


function Showbooks({books}) {
  const { cartItems, addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleMenuClick = () => {
    <ul>
      <li onClick={() => navigate('/CartPage')}>My Cart</li>
      <li onClick={() => navigate('/RemainingBooks')}>Remaining Books</li>
    </ul>
  }

  return (
    <div className='show-books' style={{ backgroundImage: `url(${library})` }}>
    <nav className='navbar'>
      <button onClick={handleMenuClick}><img src={menu} alt='menu-image' className='menu-icon'/></button>
    <h1>Library Management</h1>
    <button className='nav-buttons' onClick={() => navigate('/CartPage')}>
      <img src={cart} alt='cart-image' className='cart-icon'/>({cartItems.length})</button>
    <button className='nav-button' onClick={() => navigate('/')}>Home</button>
    </nav>
    <div className='cards-container'>
            {books.map((book,index)=>{
              const isAddedToCart=cartItems.some((item) => item.id === book.id);
              return (
              <div key={index} className='cards' style={{ backgroundImage: `url(${book.img})`}}>
                  <h4>Book Name: {book.name}</h4>
                  <p>Author: {book.author}</p>
                  <div className='quantity-container'>
                    <button onClick={()=>addToCart(book)}
                      disabled={isAddedToCart}
                      >{isAddedToCart? "Added to Cart":"Add to Cart"}</button>
                  </div>
                  </div>
              )
            })}
                </div>
                </div> 
  );
};

export default Showbooks