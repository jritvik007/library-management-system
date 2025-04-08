import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import scienceFiction from '../Assets/images/science-fiction.jpg';
import mystery from '../Assets/images/mystery.jpg';
import biography from '../Assets/images/biography.jpg';
import Modal from './Modal';

const categories = [
  { name: 'Science-Fiction', img: scienceFiction, description: 'Explore the universe and beyond' },
  { name: 'Mystery', img: mystery, description: 'Unravel the secrets and solve the puzzles' },
  { name: 'Biography', img: biography, description: 'Discover the lives of remarkable individuals' },
];

function HomePage() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [modalType, setModalType] = useState(null); 
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (savedUser) setUser(savedUser);
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (modalType === 'register') {
      const existingUser = users.find(u => u.email === form.email);
      if (existingUser) {
        alert('User already exists with this email.');
      }
      const newUser = { ...form };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      setUser(newUser);
      alert('Registration successful!');
    }

    if (modalType === 'login') {
      const existingUser = users.find(
        u => u.email === form.email && u.password === form.password
      );
      if (existingUser) {
        localStorage.setItem('currentUser', JSON.stringify(existingUser));
        setUser(existingUser);
      } else {
        alert('User not registered. Please register first.');
      }
    }

    setModalType(null);
    setForm({ name: '', email: '', password: '' });
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    alert('Logged out successfully.');
  };

  return (
    <div>
      <nav>
        <h1>Library Management</h1>
        <div> 
          {user ? (
            <>
              <button className='logout-button' onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className='login-button' onClick={() => setModalType('login')}>Login</button>
              <button className='register-button' onClick={() => setModalType('register')}>Register</button>
            </>
          )}
        </div>
      </nav>

      <header style={{ textAlign: 'center', padding: '30px' }}>
        <h1>Welcome to the Library</h1>
        <p>Explore a world of knowledge and discover new books</p>
        <button onClick={() => navigate('/ShowBooks')}>Browse Books</button>
      </header>

      <section style={{ padding: '20px' }}>
        <h3>Featured Categories</h3>
        <div className='grid-container'>
          {categories.map((category, index) => (
            <div
              key={index}
              className='card'
              style={{
                backgroundImage: `url(${category.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className='card-content'>
                <h4>{category.name}</h4>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {modalType && (
        <Modal
          type={modalType}
          form={form}
          onChange={handleInputChange}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}

export default HomePage;