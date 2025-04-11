import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const user = localStorage.getItem('loggedInUser');
    if (loggedIn && user) {
      setIsLoggedIn(true);
      setLoggedInUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    setLoggedInUser('');
    navigate('/');
  };

  return (
    <div>
      <nav>
        <h1>Library Management</h1>
        <div>
          {isLoggedIn ? (
            <>
              <span style={{ marginRight: '10px' }}>Welcome, {loggedInUser}</span>
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