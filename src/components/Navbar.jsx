import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false; // Cambia esto a `true` para simular un usuario autenticado

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="btn btn-dark" href="/">🍕 Home</a>
        {token ? (
          <>
            <a className="btn btn-dark" href="/profile">🔓 Profile</a>
            <button className="btn btn-dark" onClick={() => console.log('Logout')}>🔒 Logout</button>
          </>
        ) : (
          <>
            <a className="btn btn-dark" href="/login">🔐 Login</a>
            <a className="btn btn-dark" href="/register">🔐 Register</a>
          </>
        )}
        <a className="btn btn-dark" href="/cart">🛒 Total: ${total.toLocaleString()}</a>
      </div>
    </nav>
  );
};

export default Navbar;
