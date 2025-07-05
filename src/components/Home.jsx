import "./Home.css";
import clothes from "../assets/sweater.jpeg";
import watch from "../assets/watch.jpeg";
import pant from "../assets/pant.jpeg";
import laptop from "../assets/laptop.jpeg";
import fan from "../assets/fan.jpeg";
import iphone from "../assets/iphone.jpeg";
function Home() {
  return (
    <>
      <marquee direction="left-right">
        {" "}
        Hello ! Welcome to minimart shopping
      </marquee>
      <div className="body">
        <div className="hero-section">
          <h1>Shop the latest Product</h1>

          <h3>Explore our new collection</h3>

          <div className="button">
            <button> Shop Now</button>
          </div>
        </div>
      </div>
      <div className="product-container">
        <div className="product">
          <div className="image-container">
            <a href="#">
              <img className="image" src={clothes} alt="clothes"></img>
            </a>
          </div>
          <div className="product-name">sweater</div>
          <div className="product-name">$10.99</div>
        </div>
        <div className="product">
          <div className="image-container">
            <a href="#">
              <img className="image" src={watch} alt="watch"></img>
            </a>
          </div>
          <div className="product-name">watch</div>
          <div className="product-name">$12.99</div>
        </div>
        <div className="product">
          <div className="image-container">
            <a href="#">
              <img className="image" src={pant} alt="pant"></img>
            </a>
          </div>
          <div className="product-name">pant</div>
          <div className="product-name">$10.99</div>
        </div>
        <div className="product">
          <div className="image-container">
            <a href="#">
              <img className="image" src={laptop} alt="laptop"></img>
            </a>
          </div>
          <div className="product-name">laptop</div>
          <div className="product-name">$100.99</div>
        </div>
        <div className="product">
          <div className="image-container">
            <a href="#">
              <img className="image" src={fan} alt="fan"></img>
            </a>
          </div>
          <div className="product-name">fan</div>
          <div className="product-name">$15.99</div>
        </div>
        <div className="product">
          <div className="image-container">
            <a href="#">
              <img className="image" src={iphone} alt="iphone"></img>
            </a>
          </div>
          <div className="product-name">i-phone</div>
          <div className="product-name">$110.99</div>
        </div>
      </div>

      <div className="last">
        <p>© 2025 all right reserve. minimart pvt.ltd</p>
      </div>
    </>
  );
}
export default Home;
