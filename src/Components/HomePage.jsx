import React from 'react'
import { useNavigate } from 'react-router-dom';
import scienceFiction from '../Assets/images/science-fiction.jpg';
import mystery from '../Assets/images/mystery.jpg';
import biography from '../Assets/images/biography.jpg';
import action from '../Assets/images/action.jpg';
import history from '../Assets/images/history.jpg';
import thriller from '../Assets/images/thriller.jpg';

const categories = [
  { name: 'Science-Fiction', img: scienceFiction, description: 'Explore the universe and beyond' },
  { name: 'Mystery', img: mystery, description: 'Unravel the secrets and solve the puzzles' },
  { name: 'Biography', img: biography, description: 'Discover the lives of remarkable individuals' },
  { name: 'Action', img: action, description: 'Experience thrilling adventures and heart-pounding moments' },
  { name: 'History', img: history, description: 'Dive into the past' },
  { name: 'Thriller', img: thriller, description: 'Get ready for a rollercoaster of suspense and excitement' },
];


function HomePage() {

  const navigate = useNavigate();

  const handleloginClick = () => {
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Login</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
      
    </div>
  }

  const handleRegisterClick = () => {
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Register</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  }
  return (
       
      <div >
        <nav>
          <h1>Library Management</h1>
          <div>
            <button onClick={handleloginClick}>Login</button>
            <button onClick={handleRegisterClick}>Register</button>
          </div>
        </nav>
        <header>
          <h1>Welcome to the Library</h1>
          <p>Explore a world of knowledge and discover new boooks</p>
          <button onClick={()=> navigate('/ShowBooks')}>Browse Books</button>
        </header>
        <section >
          <h3>Featured Categories</h3>
          <div className='grid-container'>
            {categories.map((category,index)=>(
              <div key={index} className='card' style={{ backgroundImage: `url(${category.img})`}}>
                <div className='card-content'>
                  <h4>{category.name}</h4>
                  <p>{category.description}</p>
                  </div>
                  </div>
                ))}
          </div>
        </section>
      </div>
      
   
  )
};

export default HomePage