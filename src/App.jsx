import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
//import Login from './components/Login';
//import Register from './components/Register';
import './main.css'; // Estilos específicos

const App = () => {
  return (
    <div>
      <Navbar />
        <Home />
       {/* <Register /> */}
      {/* <Login /> */}
      <Cart />
      <Footer />
    </div>
  );
};

export default App;