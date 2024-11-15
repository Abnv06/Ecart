import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({ cart, setCart }) => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const filterProducts = items.filter((product) => product.id == id);
        setProduct(filterProducts[0]);

        const relatedProducts = items.filter((item) => item.category === filterProducts[0].category);
        setRelatedProducts(relatedProducts);
    }, [id, product.category]);

    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = { id, price, title, description, imgSrc };
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
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className="container py-4">
                <div className="row">
                    {/* Product Image */}
                    <div className="col-md-6">
                        <img src={product.imgSrc} alt={product.title} className="img-fluid" />
                    </div>
                    
                    {/* Product Info */}
                    <div className="col-md-6 text-center">
                        <h1 className="card-title">{product.title}</h1>
                        <p className="card-text">{product.description}</p>
                        <div className="d-flex justify-content-center">
                            <button className='btn btn-primary mx-2'>{product.price}₹</button>
                            <button
                                onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                                className='btn btn-warning'>Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <h1 className="text-center my-4">Related Products</h1>
                <div className="row">
                    {/* Map through related products */}
                    {relatedProducts.map((relatedProduct) => (
                        <div key={relatedProduct.id} className="col-6 col-md-4 col-lg-3 mb-4">
                            <div className="card">
                                <img src={relatedProduct.imgSrc} alt={relatedProduct.title} className="card-img-top img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">{relatedProduct.title}</h5>
                                    <p className="card-text">{relatedProduct.description}</p>
                                    <div className="d-flex justify-content-between">
                                        <button className='btn btn-primary'>{relatedProduct.price}₹</button>
                                        <button
                                            onClick={() => addToCart(relatedProduct.id, relatedProduct.price, relatedProduct.title, relatedProduct.description, relatedProduct.imgSrc)}
                                            className='btn btn-warning'>
                                            Add to Cart
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

export default ProductDetails;
