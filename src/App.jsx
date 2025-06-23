import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import './main.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
