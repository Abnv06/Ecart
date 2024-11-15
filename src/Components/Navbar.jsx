import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from './Data';
import { FaCartArrowDown } from "react-icons/fa";
import { FaBars } from "react-icons/fa";  // Hamburger icon for mobile view

const NavBar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // To toggle the mobile menu

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <header className="sticky-top" style={{ backgroundColor: '#7Fa1c3' }}>
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center py-3">
            {/* Logo */}
            <Link to={'/'} className="brand h4">E-Cart</Link>

            {/* Search Bar */}
            <form onSubmit={handleSubmit} className="d-flex">
              <input
                style={{ borderRadius: '5px' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Search Products"
              />
            </form>

            {/* Cart Button */}
            <Link to={'/cart'} className="cart">
              <button type="button" className="btn btn-primary position-relative">
                <FaCartArrowDown />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>

            {/* Hamburger Icon (for mobile) */}
            <div className="d-md-none ms-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FaBars />
            </div>
          </div>

          {/* Filter Options (Mobile and Desktop) */}
          {location.pathname === '/' && (
            <div className={`nav-bar-wrapper ${isMenuOpen ? 'd-block' : 'd-none'} d-md-flex flex-column flex-md-row`}>
              <div className="item cursor-pointer" onClick={() => setData(items)}>No Filter</div>
              <div className="item cursor-pointer" onClick={() => filterByCategory('mobiles')}>Mobiles</div>
              <div className="item cursor-pointer" onClick={() => filterByCategory('laptops')}>Laptops</div>
              <div className="item cursor-pointer" onClick={() => filterByCategory('tablets')}>Tablets</div>
              <div className="item cursor-pointer" onClick={() => filterByPrice(29999)}>{"Above "} 29999</div>
              <div className="item cursor-pointer" onClick={() => filterByPrice(49999)}>{"Above "} 49999</div>
              <div className="item cursor-pointer" onClick={() => filterByPrice(69999)}>{"Above "} 69999</div>
              <div className="item cursor-pointer" onClick={() => filterByPrice(89999)}>{"Above "} 89999</div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default NavBar;
