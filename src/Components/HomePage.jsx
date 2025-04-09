import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); 
    setIsLoggedIn(false);
    navigate('/'); 
  };

  return (
    <div>
      <nav>
        <h1>Library Management</h1>
        <div>
          {isLoggedIn ? (
            <>
              <button onClick={handleLogout} className="logout-button">Logout</button>
              <button onClick={() => navigate('/showbooks')} className="browse-button">Browse Books</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/login')} className="login-button">Login</button>
              <button onClick={() => navigate('/register')} className="register-button">Register</button>
            </>
          )}
        </div>
      </nav>

      <header>
        <h1>Welcome to the Library</h1>
        <p>Explore a world of knowledge and discover new books</p>
        {!isLoggedIn && (
          <button onClick={() => navigate('/categories')}>Browse Books</button>
        )}
      </header>

      <section style={{ padding: '20px' }}>
        <h3>Featured Categories</h3>
        <div>
          Here knowledge meets community. We offer a wide range of books, digital resources, and engaging programs to foster a love of reading and lifelong learning. Explore our catalog, join events, and become a part of our vibrant community.
        </div>
      </section>
    </div>
  );
}

export default HomePage;
