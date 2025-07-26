import { FaWhatsapp } from "react-icons/fa";
import "./contact.css";
function Contact() {
  return (
    <>
   

    
      <div className="form">
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="your@gmail.com"
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Fullname:
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Your fullname"
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Address:
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              
            />
          </div>
         

          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="e.g.Butwal"
            />
          </div>
          <div className="call">
            <label  className="form-label" htmlFor="call-in">
            Whatsapp < FaWhatsapp size={25}  />:
            </label>

            <input type="text" id="call-in" placeholder="Phone no." />
          </div>
          
          <div className="check-box">
            <input type="checkbox" name=".." id="input-box" />
            <label htmlFor="input-box" className="check-text">
              Agree with all <a href="#">terms and policy</a>
            </label>
          </div>
          <div className="col-12">
            <button type="submit" className="submit-button" size="20px">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Contact;
