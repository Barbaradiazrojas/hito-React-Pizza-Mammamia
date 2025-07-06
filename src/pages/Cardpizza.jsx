import React from 'react';
import PropTypes from 'prop-types';
import '../main.css';

const Cardpizza = ({ name, price, ingredients, img, desc, addToCart }) => {
  return (
    <div className="pizza">
      <div className="card">
        <img className="border rounded" src={img} alt={name} />
        <h2 className="text-start fs-3 m-2">{name}</h2>
        <hr />
        <p className="description">{desc}</p>
        <p>Ingredientes:</p>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <hr />
        <p className="price fs-4 fw-bold">Precio: ${price.toLocaleString()}</p>
        <button
          className="btn btn-light"
          onClick={addToCart}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

Cardpizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Cardpizza;
