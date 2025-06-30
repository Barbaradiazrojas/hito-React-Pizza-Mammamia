import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pizzas = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        // Asegúrate de que el endpoint coincida con el de tu API
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{pizza.name}</h1>
          <p>{pizza.description}</p>
          <p>Precio: {pizza.price}</p>
          <h3>Ingredientes</h3>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <button className="btn btn-primary">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizzas;
