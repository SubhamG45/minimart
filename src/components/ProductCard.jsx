import "./ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CardContext";

function ProductCard({image, title, price,description, btnName} ) {
  const { addToCart } = useContext(CartContext);
  const handleCart = () => {
    addToCart({ image, title, price, description });
  };
  return (
    <>
      <div className=" card custom-card" style={{ width: "20rem" }}>
        <img src={image} className=" card-img-top product-image " alt="." />
        <div className="card-body">
          <h5 className="card-title product-title">{title}</h5>
          <p className="card-text">{price}</p>
          <p className="card-text product-description">{description}</p>

          <button className="btn btn-primary" onClick={handleCart}>{btnName}</button>
        </div>
      </div>
      
    </>
  );
}
export default ProductCard;
