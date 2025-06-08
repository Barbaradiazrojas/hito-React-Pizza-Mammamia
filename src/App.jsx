import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import './index.css'; // Estilos globales
import './main.css'; // Estilos específicos

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="form-container">
        <Register />
        {/* <Login /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;