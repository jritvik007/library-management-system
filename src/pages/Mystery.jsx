import React from 'react'
import { useNavigate } from 'react-router-dom';
import library from '../Assets/images/library.jpg';

function Mystery({books}) {
    const navigate = useNavigate();

    const NextTwoBooks = books.slice(2,4);

    const handleAddToCartClick = () => {
        alert('Go to Home and Login first');
      };

  return (
    <div className="show-books" style={{ backgroundImage: `url(${library})`}}>
      <nav className="navbar">
        <h1>Mystery Books</h1>
        <button onClick={() => navigate('/categories')} className='nav-buttons'>Back</button>
        <button className="nav-button" onClick={() => navigate('/')}>Home</button>
      </nav>

      <div className="cards-container">
        {NextTwoBooks.map((book, index) => {
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

export default Mystery