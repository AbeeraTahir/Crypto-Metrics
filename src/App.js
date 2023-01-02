import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoinDetailsPage from './pages/CoinDetailsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id/" element={<CoinDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
