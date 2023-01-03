import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoinsList from './components/CoinsList';
import CoinDetailsPage from './components/CoinDetails';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<CoinsList />} />
      <Route path="/details/:id/" element={<CoinDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
