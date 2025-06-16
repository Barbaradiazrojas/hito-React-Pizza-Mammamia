import React from 'react';
import Header from './Header';
import Cardpizza from './Cardpizza'; // ✅ Corregido: sin './components/' porque están en la misma carpeta
import 'bootstrap/dist/css/bootstrap.min.css';
import { pizzas } from './pizzas';

const Home = () => {
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;