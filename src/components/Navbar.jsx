import "./Navbar.css";
import logo from "../assets/pic.jpeg";

function Navbar(){
return (
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      Bootstrap
    </a>
  </div>
</nav>)
}
export  default Navbar;
