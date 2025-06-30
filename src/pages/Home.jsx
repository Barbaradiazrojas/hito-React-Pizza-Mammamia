import React, { useState, useEffect } from 'react';
import Header from '../pages/Header';
import Cardpizza from '../pages/Cardpizza';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
