import "./Navbar.css";
import logo from "../assets/minimart.jpeg";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
function Navbar() {
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
              class="d-inline-block align-text-top"/>
              Minimart 
            
          </a>
          <ul class="abc">
            <li>
              <a href="#"> Home</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              {" "}
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">products</a>
            </li>
            
            
            
          </ul>
          <div className="apple">
          <input type="text" placeholder="search" className="box"></input>
        <FaSearch size={20} />
        </div>
        <div class="cart">

        <a href="#"><FaShoppingCart size={20}/></a>
        <a href="#"><FaUserAlt /></a>
        <a href="#"><IoMdMenu  size={25}/></a>
        </div>
        

        </div>
      </nav>
      
    </>
  );
}
export default Navbar;
