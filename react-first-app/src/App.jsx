import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/components/Home';
import MovieDetails from './assets/components/MovieDetails';
import './App.css';
import './Trending.css';
import './MovieTitle.css'; 
import './FirstMovie.css';
import './NavBar.css';
import './MovieDetails.css'; 



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;
