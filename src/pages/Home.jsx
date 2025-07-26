import  { useNavigate } from "react-router";
import CustomCard from "../components/ProductCard";
import earbuds from "../assets/earbuds-looks.png";
import asus from "../assets/laptop-asus.png";
import materails from "../assets/materails.png";
import "./Home.css";
import clothes from "../assets/sweater.jpeg";
import watch from "../assets/watch.jpeg";
import pant from "../assets/pant.jpeg";
import laptop from "../assets/laptop.jpeg";
import fan from "../assets/fan.jpeg";
import iphone from "../assets/iphone.jpeg";
function Home(){
const navigate = useNavigate();
const btnShopnow = ()=>{
  navigate('/product')

}

  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img src={asus} class="d-block w-100 coursel-sec" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={materails} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={earbuds} class="d-block w-100 coursel-sec" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="body">
        <div className="hero-section">
          <h3>Shop The Latest Product</h3>

          

          <div className="button-submit">
            <button onClick={btnShopnow}> Shop Now</button>
          </div>
        </div>
      </div>

      <div  className="home-product">
        <CustomCard
          image={clothes}
          title={"clothes"}
          price={"$12"}
          btnName={"Add To Cart"}
        />
        <CustomCard
          image={watch}
          title={"watch"}
          price={"$20"}
          btnName={"Add To Cart"}
        />

        <CustomCard
          image={pant}
          title={"pant"}
          price={"$25"}
          btnName={"Add To Cart"}
        />

        <CustomCard className="laptop"
          image={iphone}
          title={"iphone"}
          price={"$110"}
          btnName={"Add To Cart"}
        />
      </div>
      
    </>
  );
}
export default Home;
