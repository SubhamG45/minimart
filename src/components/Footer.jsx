import { FaStar } from "react-icons/fa6";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="rate-us">
          <h5>Rate us-</h5>
          <FaStar className="rate" size={15} />{" "}
          <FaStar className="rate" size={15} />{" "}
          <FaStar className="rate" size={15} />{" "}
          <FaStar className="rate" size={15} />{" "}
          <FaStar className="rate" size={15} />
        </div>
        <div className="footer-text">
          <p>
            {" "}
            "© 2025 YourCompany. All rights reserved. | Privacy Policy | Terms
            of Service"
          </p>
       
        </div>
      </footer>
    </>
  );
}
export default Footer;
