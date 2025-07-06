import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'; // Asegúrate de que la ruta sea correcta

const Navbar = () => {
  const { calculateTotal } = useContext(CartContext);
  const token = false; // Cambia esto a `true` para simular un usuario autenticado

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="btn btn-light" to="/">🍕 Home</Link>
        {token ? (
          <>
            <Link className="btn btn-dark" to="/profile">🔓 Profile</Link>
            <button className="btn btn-light" onClick={() => console.log('Logout')}>🔒 Logout</button>
          </>
        ) : (
          <>
            <Link className="btn btn-light" to="/login">🔐 Login</Link>
            <Link className="btn btn-light" to="/register">🔐 Register</Link>
          </>
        )}
        <Link className="btn btn-light" to="/cart">🛒 Total: ${calculateTotal().toLocaleString()}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
