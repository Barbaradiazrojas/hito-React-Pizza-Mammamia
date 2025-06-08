<<<<<<< HEAD
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
=======
import Footer from './assets/components/Footer';
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
>>>>>>> 0487f857a9cca322e0c4bc84b08019c8619fd740
  );
};

export default App;