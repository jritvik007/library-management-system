import React from 'react';
import { useNavigate } from 'react-router-dom';
import scienceFiction from '../Assets/images/science-fiction.jpg';
import mystery from '../Assets/images/mystery.jpg';
import biography from '../Assets/images/biography.jpg';

function Categories() {
  const navigate = useNavigate();

  const handleScienceFictionClick = () => {
    navigate('/science-fiction');
  };

  const handleMysteryClick = () => {
    navigate('/mystery');
  };

  const handleBiographyClick = () => {
    navigate('/biography');
  };

  return (
    <div>
      <nav>
        <h1>Featured Categories</h1>
        <div>
          <button onClick={() => navigate('/allbooks')} className="login-button">
            All Books
          </button>
          <button onClick={() => navigate('/')} className="register-button">
            Home
          </button>
        </div>
      </nav>
      <section style={{ padding: '20px' }}>
        <div className="grid-container">
          <div
            className="card"
            style={{
              backgroundImage: `url(${scienceFiction})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={handleScienceFictionClick}
          >
            <div className="card-content">
              <h4>Science-Fiction</h4>
              <p>Explore the universe and beyond</p>
            </div>
          </div>

          <div
            className="card"
            style={{
              backgroundImage: `url(${mystery})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={handleMysteryClick}
          >
            <div className="card-content">
              <h4>Mystery</h4>
              <p>Unravel the secrets and solve the puzzles</p>
            </div>
          </div>

          <div
            className="card"
            style={{
              backgroundImage: `url(${biography})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={handleBiographyClick}
          >
            <div className="card-content">
              <h4>Biography</h4>
              <p>Discover the lives of remarkable individuals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
