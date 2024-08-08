import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstMovie from './assets/components/FirstMovie';
import Trending from './assets/components/Trending';
import Home from './assets/components/Home';
import './App.css';
import './Trending.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
