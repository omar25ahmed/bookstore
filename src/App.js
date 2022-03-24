import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Books from './Pages/Books/Books';
import Categories from './Pages/Categories/Categories';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <div className="nav-el">
          <h1>Bookstore CMS</h1>
          <Link to="/">Books</Link>
          <Link to="/Categories">Categories</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
