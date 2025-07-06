// src/App.jsx
import React from 'react';
import { CartProvider } from './components/CartContext';
import AppRouter from './AppRouter';

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </div>
  );
};

export default App;
