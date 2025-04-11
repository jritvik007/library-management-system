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
              <span className='welcome'>Welcome, {loggedInUser}</span>
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

      <section style={{ padding: '20px'}}>
        <h3>About Books</h3>
        <div>
        Books have always held a special place in human history and culture, serving as a vital means of communication, education, and entertainment. From ancient scrolls to modern digital eBooks, they have evolved over centuries, yet their importance remains undiminished. Books allow us to connect with ideas, emotions, and experiences far beyond our immediate surroundings. They give us access to the thoughts of great minds, the beauty of diverse cultures, and the complexity of human emotions. Through fiction, readers can immerse themselves in imaginary worlds, live the lives of unique characters, and explore scenarios that might never occur in real life. Non-fiction books, on the other hand, provide factual knowledge, inspire action, and offer insights into everything from science and history to personal growth and philosophy.
        </div>
      </section>
    </div>
  );
}

export default HomePage;