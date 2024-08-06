import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from './Data';
import { FaCartArrowDown } from "react-icons/fa";




const NavBar = ({ setData, cart }) => {
   const location = useLocation();
   const navigate = useNavigate();
   const [searchTerm, setSearchTerm] = useState("")

   const filterBycategory = (category) => {
      const element = items.filter((product) => product.category === category)
      setData(element)
   }

   const filterByPrice = (price) => {
      const element = items.filter((product) => product.price >= price)
      setData(element)
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/search/${searchTerm}`)
   }

   return (
      <>
         <header className="sticky-top">
            <div className="nav-bar">
               <Link to={'/'} className="brand">E-Cart</Link>


               <form onSubmit={handleSubmit} className="search-bar" >
                  <input style={{borderRadius: '5px'}}
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     type="text"
                     placeholder="Search Products"
                  />
               </form>


               <Link to={'/cart'} className="cart"><button type="button" className="btn btn-primary position-relative">
               <FaCartArrowDown />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                     {cart.length}
                     <span className="visually-hidden">unread messages</span>
                  </span>
               </button></Link>
            </div>

            {
               location.pathname == '/' && (<div className="nav-bar-wrapper" style={{ courser: "pointer" }}>
                  <div style={{ cursor: "pointer" }} className="item">Filter by {"-->"}</div>
                  <div style={{ cursor: "pointer" }} onClick={() => setData(items)} className="item">No Filter</div>
                  <div style={{ cursor: "pointer" }} onClick={() => filterBycategory('mobiles')} className="item">Mobiles</div>
                  <div style={{ cursor: "pointer" }} onClick={() => filterBycategory('laptops')} className="item">Leptop</div>
                  <div style={{ cursor: "pointer" }} onClick={() => filterBycategory('tablets')} className="item">Tablets</div>

                  <div style={{ cursor: "pointer" }} onClick={() => filterByPrice(29999)} className="item">{">="} 29999</div>
                  <div style={{ cursor: "pointer" }} onClick={() => filterByPrice(49999)} className="item">{">="} 49999</div>
                  <div style={{ cursor: "pointer" }} onClick={() => queueMicrotaskfilterByPrice(69999)} className="item">{">="} 69999</div>
                  <div style={{ cursor: "pointer" }} onClick={() => filterByPrice(89999)} className="item">{">="} 89999</div>

               </div>)
            }


         </header>
      </>
   );
};

export default NavBar;