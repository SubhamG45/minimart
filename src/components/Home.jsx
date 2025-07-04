import "./Home.css";
import clothes from "../assets/sweater.jpeg";
import watch from "../assets/watch.jpeg"
import pant from "../assets/pant.jpeg"
import laptop from "../assets/laptop.jpeg"
import fan from "../assets/fan.jpeg"
import iphone from "../assets/iphone.jpeg"
function Home() {
  return (
    <>
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
            <img className="image" src={clothes} alt="clothes"></img>
          </div>
          <div className="product-name">sweater</div>
          <div className="product-name">$10.99</div>
        </div>
        <div className="product">
          <div className="image-container">
            <img className="image" src={watch} alt="watch"></img>
          </div>
          <div className="product-name">watch</div>
          <div className="product-name">$12.99</div>
        </div>
        <div className="product">
          <div className="image-container">
            <img className="image" src={pant} alt="pant"></img>
          </div>
          <div className="product-name">pant</div>
          <div className="product-name">$10.99</div>
        </div>
        <div className="product">
          <div className="image-container">
            <img className="image" src={laptop} alt="laptop"></img>
          </div>
          <div className="product-name">laptop</div>
          <div className="product-name">$100.99</div>
        </div>
        <div className="product">
          <div className="image-container">
            <img className="image" src={fan} alt="fan"></img>
          </div>
          <div className="product-name">fan</div>
          <div className="product-name">$15.99</div>
        </div>
        <div className="product">
          <div className="image-container">
            <img className="image" src={iphone} alt="iphone"></img>
          </div>
          <div className="product-name">i-phone</div>
          <div className="product-name">$110.99</div>
        </div>
      </div>
    </>
  );
}
export default Home;
