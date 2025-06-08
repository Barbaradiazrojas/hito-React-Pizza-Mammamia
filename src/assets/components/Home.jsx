import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                className="card-img-top img-fluid"
                alt="Napolitana"
              />
              <div className="card-body">
                <h5 className="card-title">Napolitana</h5>
                <p className="card-text mt-2">Ingredientes:</p>
                <ul className="list-unstyled">
                  <li>Mozzarella</li>
                  <li>Tomates</li>
                  <li>Jamón</li>
                  <li>Orégano</li>
                </ul>
                <p className="card-text fw-bold">Precio: $5,950</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-light border border-dark">Ver más 👀</button>
                  <button className="btn btn-dark text-white">Añadir 🛒</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
                className="card-img-top img-fluid"
                alt="Española"
              />
              <div className="card-body">
                <h5 className="card-title">Española</h5>
                <p className="card-text mt-2">Ingredientes:</p>
                <ul className="list-unstyled">
                  <li>Mozzarella</li>
                  <li>Gorgonzola</li>
                  <li>Parmesano</li>
                  <li>Provolone</li>
                </ul>
                <p className="card-text fw-bold">Precio: $6,950</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-light border border-dark">Ver más 👀</button>
                  <button className="btn btn-dark text-white">Añadir 🛒</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
                className="card-img-top img-fluid"
                alt="Pepperoni"
              />
              <div className="card-body">
                <h5 className="card-title">Pepperoni</h5>
                <p className="card-text mt-2">Ingredientes:</p>
                <ul className="list-unstyled">
                  <li>Mozzarella</li>
                  <li>Pepperoni</li>
                  <li>Orégano</li>
                </ul>
                <p className="card-text fw-bold">Precio: $6,950</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-light border border-dark">Ver más 👀</button>
                  <button className="btn btn-dark text-white">Añadir 🛒</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
