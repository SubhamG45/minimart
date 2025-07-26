import { useContext } from "react";
import { CartContext } from "../context/CardContext";
import React from "react";  
function CartPage() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h3>Your Items in cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, key) => (
            <li key={key}>
              {item.title}-{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default CartPage;