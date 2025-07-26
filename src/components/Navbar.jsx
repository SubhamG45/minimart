import { CartContext } from "../context/CardContext";
import { useContext } from "react";
import{Link} from "react-router-dom"
import "./Navbar.css";

import logo from "../assets/minimart.jpg";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {
   const { cart } = useContext(CartContext);
  return (
    <>
   
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="minimart"
              width="30"
              height="24"
              className="d-inline-block align-text-top"/>
              Minimart 
            
          </a>
          <ul className="abc">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
             <Link to="/contact">Contact</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            
            
            
          </ul>

          <div className="apple">
          <input type="text" placeholder="search" className="box"></input>
        <FaSearch size={20} />
        </div>
         <div className="cart-set">
        
             <Link to= "/cart"><FaShoppingCart className="cart-icon" /></Link>
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          

        </div>
        <a href="#"><FaUserAlt /></a>

        

        </div>
      </nav>
      
    </>
  );
}
export default Navbar;
