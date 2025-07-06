// src/pages/Home.jsx
import React, { useState, useEffect, useContext } from 'react';
import Header from './Header';
import Cardpizza from './Cardpizza';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../components/CartContext';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchPizzas();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <Cardpizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
                addToCart={() => addToCart(pizza)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
