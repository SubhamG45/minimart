import { useEffect, useState } from "react";
import axios from "axios";

import CustomCard from "../components/ProductCard";

import "./product.css";
function Product() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // decide how many items per page
  const itemPerPage = 8;
  // calculate which item to show
  const start = ( currentPage -1 ) * itemPerPage;
  const end = start + itemPerPage;
  const itemsToShow = products.slice(start, end);
  // calculate how many total pages
  const totalPages = Math.ceil(products.length / itemPerPage);
  // handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        console.log("You are getting data now", res.data);
      })
      .catch((err) => {
        console.log("error  in fetching the json", err);
      });
  }, []);
  return (
    <>
      <div className="image-container">
        {itemsToShow.map((item) => (
          <CustomCard
            className="img"
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            btnName={"Add To Cart"}
          />
        ))}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "dissable" : ""} `}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>

            {/* page number */}
            {Array.from({ length: totalPages }).map((item, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            {/*  Nextt button   */}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disable" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
                
              </button>
            </li>
          </ul>
        </nav>
        
      
    </>
  );
}
export default Product;
