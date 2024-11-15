import React from 'react'
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className='container my-5'>
        {/* If cart is empty, show message */}
        {
          cart.length === 0 ? (
            <div className='text-center'>
              <h1>Your cart is empty</h1>
              <Link to={"/"} className='btn btn-warning'>Continue Shopping...</Link>
            </div>
          ) :
            <div className="row">
              {cart.map((product) => {
                return (
                  <div className="col-lg-6 col-md-12 col-sm-12 mb-4" key={product.id}>
                    <div className="card">
                      <div className="row g-0">
                        <div className="col-md-4">
                          {/* Make image responsive */}
                          <img
                            src={product.imgSrc}
                            className="img-fluid rounded-start"
                            alt={product.title}
                            style={{ maxWidth: "100%", height: "auto" }} // Ensures image is responsive
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body text-center">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <button className='btn btn-primary mx-3'>{product.price}₹</button>
                            <button className='btn btn-warning'>Buy Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
        }
      </div>

      {/* Checkout and Clear Cart buttons */}
      {
        cart.length !== 0 && (
          <div className="container text-center my-2">
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-12 mb-3">
                <button className='btn btn-warning w-100'>CheckOut</button>
              </div>
              <div className="col-md-4 col-sm-12 mb-3">
                <button onClick={() => setCart([])} className='btn btn-danger w-100'>Clear Cart</button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Cart;
