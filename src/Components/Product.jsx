import React from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    };
    setCart([...cart, obj]);
    toast('Item added to cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <>
      {/* Toast notification */}
      <ToastContainer position="top-right" autoClose={1500} theme="dark" />

      <div className="container my-4">
        <div className="row g-2">
          {items.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 col-sm-6 col-6 text-center">
              <div className="card h-100 shadow-sm border-0">
                <Link to={`/product/${product.id}`} className="d-flex justify-content-center align-items-center p-2">
                  <img
                    src={product.imgSrc}
                    className="card-img-top img-fluid rounded"
                    alt={product.title}
                  />
                </Link>
                <div className="card-body d-flex flex-column p-2">
                  <h6 className="card-title text-truncate">{product.title}</h6>
                  <p className="card-text text-muted small">{product.description}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">{product.price}₹</span>
                    <button
                      onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                      className="btn btn-warning btn-sm"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
