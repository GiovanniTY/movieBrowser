import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/components/Home';
import './App.css';
import './Trending.css';
import './MovieTitle.css'; 
import './FirstMovie.css';
import './NavBar.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
