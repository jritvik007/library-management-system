import React from 'react';
import './ShowBooks.css';
import { useNavigate } from 'react-router-dom';
import library from '../Assets/images/library.jpg';

function AllBooks({ books }) {
  const navigate = useNavigate();

  const handleAddToCartClick = () => {
    alert('Go to Home and Login first');
  };

  return (
    <div className="show-books" style={{ backgroundImage: `url(${library})`}}>
      <nav className="navbar">
        <h1>All Books</h1>
        <button className="nav-button" onClick={() => navigate('/')}>Home</button>
      </nav>

      <div className="cards-container">
        {books.map((book, index) => {
          return (
            <div key={index} className="cards" style={{ backgroundImage: `url(${book.img})` }}>
              <h4>Book Name: {book.name}</h4>
              <p>Author: {book.author}</p>
              <div className="quantity-container">
                <button onClick={handleAddToCartClick}>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllBooks;
