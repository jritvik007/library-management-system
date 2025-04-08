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
    const {name, email, password}= form;
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (modalType === 'register') {

      if(!name || !email || !password){
         alert('All fields are required');
         return;
        }
         if (!emailValid.test(email)){
          alert('Invalid email format');
           return;
         }
         if(password.length!==8){
          alert('Password must be exactly 8 characters long');
          return;
         }
      
      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        alert('User already exists with this email. Register with a different email');
        return;
      }
      const newUser = { ...form };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      setUser(newUser);
      alert('Registration successful!');
    }

    if (modalType === 'login') {
      if(!email || !password){
        alert('All fields are required');
        return;
      }
      if (!emailValid.test(email)){
        alert('Invalid email format');
         return;
       }
       if(password.length!==8){
        alert('Password must be exactly 8 characters long');
        return;
       }

      const existingUser = users.find(u => u.email === email && u.password === password);

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
               <button className='logout-button' onClick={handleLogout}>Logout</button>  
          ) : (
            <>
              <button className='login-button' onClick={() => setModalType('login')}>Login</button>
              <button className='register-button' onClick={() => setModalType('register')}>Register</button>
            </>
          )}
        </div>
      </nav>

      <header>
        <h1>Welcome to the Library</h1>
        <p>Explore a world of knowledge and discover new books</p>
        <button 
        onClick={()=>{
          if(user){
            navigate('/ShowBooks');
          }
          else {
             setModalType('login');
          }
        }}>Browse Books</button>
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