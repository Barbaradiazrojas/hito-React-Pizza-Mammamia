import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = false; // Cambia esto a `true` para simular un usuario autenticado

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="btn btn-dark" to="/">🍕 Home</Link>
        {token ? (
          <>
            <Link className="btn btn-dark" to="/profile">🔓 Profile</Link>
            <button className="btn btn-dark" onClick={() => console.log('Logout')}>🔒 Logout</button>
          </>
        ) : (
          <>
            <Link className="btn btn-dark" to="/login">🔐 Login</Link>
            <Link className="btn btn-dark" to="/register">🔐 Register</Link>
          </>
        )}
        <Link className="btn btn-dark" to="/cart">🛒 Total: ${total.toLocaleString()}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
