import React, { useState, useContext } from 'react';
import './ShowBooks.css';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import library from '../Assets/images/library.jpg';
import menu from '../Assets/images/menu.png';

function Showbooks({ books }) {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const filteredBooks = books.filter(book => {
    if (filter === 'cart') {
      return cartItems.some(item => item.id === book.id);
    } else if (filter === 'remaining') {
      return !cartItems.some(item => item.id === book.id);
    }
    return true;
  });

  const handleRemoveFromCart = (book) => {
    removeFromCart(book);
  };

  const Heading = () => {
    switch (filter) {
      case 'cart':
        return 'My Cart';
      case 'remaining':
        return 'Remaining Books';
      default:
        return 'All Books';
    }
  };

  return (
    <div className='show-books' style={{ backgroundImage: `url(${library})` }}>
      <nav className='navbar'>
        <button onClick={toggleMenu}>
          <img src={menu} alt='menu-icon' className='menu-icon' />
        </button>
        <h1 style={{ marginLeft: '10px' }}>{Heading()}</h1>
        <button className='nav-button' onClick={() => navigate('/')}>Home</button>
      </nav>

      {menuOpen && (
        <div className='sidebar'>
          <button onClick={() => { setFilter('cart'); setMenuOpen(false); }}>My Cart</button>
          <button onClick={() => { setFilter('remaining'); setMenuOpen(false); }}>Remaining Books</button>
          <button onClick={() => { setFilter('all'); setMenuOpen(false); }}>All Books</button>
        </div>
      )}

      <div className='cards-container'>
        {filteredBooks.map((book, index) => {
          const isAddedToCart = cartItems.some((item) => item.id === book.id);

          return (
            <div key={index} className='cards' style={{ backgroundImage: `url(${book.img})` }}>
              <h4>Book Name: {book.name}</h4>
              <p>Author: {book.author}</p>
              <div className='quantity-container'>
                {filter === 'cart' ? (
                  <button onClick={() => handleRemoveFromCart(book.id)}>Remove</button>
                ) : (
                  <button onClick={() => addToCart(book)} disabled={isAddedToCart}>
                    {isAddedToCart ? "Added to Cart" : "Add to Cart"}
                  </button>
                )}
              </div>
              </div>
          );
        })}
      </div>
      </div>
    );
}

export default Showbooks;