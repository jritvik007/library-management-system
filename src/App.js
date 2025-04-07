
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ShowBooks from './pages/ShowBooks';
import CartPage from './pages/CartPage';
import book1 from './Assets/images/book1.jpg';
import book2 from './Assets/images/book2.jpg';
import book3 from './Assets/images/book3.jpg';
import book4 from './Assets/images/book4.jpg';
import book5 from './Assets/images/book5.jpg';
import book6 from './Assets/images/book6.jpg';
import book7 from './Assets/images/book7.jpg';
import book8 from './Assets/images/book8.jpg';
import book9 from './Assets/images/book9.jpg';

const books = [
  { id: '1', name: 'To Kill a Mockingbird', img: book1, author: 'Harper Lee' },
  { id: '2',name: 'Pride and Prejudice', img: book2,  author: 'Jane Austen' },
  { id: '3',name: 'The Great Gatsby', img: book3, author: 'F. Scott Fitzgerald' },
  { id: '4',name: '1984', img: book4, author: 'George Orwell' },
  { id: '5',name: 'The Lord of the Rings', img: book5, author: 'J.R.R. Tolkien' },
  { id: '6',name: 'The Catcher in the Rye', img: book6, author: 'J.D. Salinger' }, 
  { id: '7',name: 'One Hundred Years of Solitude', img: book7, author: 'Gabriel Garcia Marquez'},
  { id: '8',name: 'Don Quixote', img: book8, author: ' Miguel de Cervantes'},
  { id: '9',name: 'The Odyssey', img: book9, author: 'Homer'},
];


function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShowBooks" element={<ShowBooks books={books} />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/RemainingBooks" element={<remainingBooks />} />
      </Routes>
    </Router>
  );
}

export default App;
