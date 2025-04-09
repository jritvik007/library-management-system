import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ShowBooks from './pages/ShowBooks';
import AllBooks from './pages/AllBooks';
import book1 from './Assets/images/book1.jpg';
import book2 from './Assets/images/book2.jpg';
import book3 from './Assets/images/book3.jpg';
import book4 from './Assets/images/book4.jpg';
import book5 from './Assets/images/book5.jpg';
import book6 from './Assets/images/book6.jpg';
import Categories from './pages/Categories';
import LoginPage from './pages/LoginPage';
import ScienceFiction from './pages/ScienceFiction';
import Mystery from './pages/Mystery';
import Biography from './pages/Biography';
import RegisterPage from './pages/RegisterPage';

const books = [
  { id: '1', name: 'The Ark', img: book1, author: 'Christopher Coates' },
  { id: '2',name: 'Alien Genesis', img: book2,  author: 'Gary Beene' },
  { id: '3',name: 'The Daughter of Time', img: book3, author: 'Josephine Tey' },
  { id: '4',name: 'Rebecca', img: book4, author: 'Daphne du Maurier' },
  { id: '5',name: 'Wings of Fire', img: book5, author: 'Dr. A.P.J. Abdul Kalam' },
  { id: '6',name: 'Einstein: His Life and Universe', img: book6, author: 'Walter Isaacson' }, 
];


function App() {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShowBooks" element={<ShowBooks books={books} />} />
        <Route path="/login" element={<LoginPage />}/> 
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/categories" element={<Categories />}/>  
        <Route path="/science-fiction" element={<ScienceFiction books={books}/>} />
        <Route path="/mystery" element={<Mystery books={books}/>} />
        <Route path="/biography" element={<Biography books={books}/>} />
        <Route path="/allbooks" element={<AllBooks books={books} />}/>
      </Routes>
    </Router>
  );
}

export default App;
