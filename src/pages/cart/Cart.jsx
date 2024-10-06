import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CounterContext } from "../../counterContext/counterContext";

function Cart() {
  const [cart, setCart] = useState([]);
  const { count, setCount } = useContext(CounterContext);

  const getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
  };

  const handleDeleteCart = () => {
    localStorage.clear();
    toast.success("Cart cleared");
    setCart([]);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  function emptyCart(){
    setCount(0);
  }

  return (
    <div>
 <h1 className="mt-20 text-3xl ms-20 mb-20">
          No of item in cart:{count}
        </h1>
      
      {(!cart || cart.length === 0) && (
        <div className="cart-item p-4 m-4 rounded shadow">
          <h1>Cart is empty</h1>
        </div>
      )}
  
      {cart?.map((item, index) => (
        <div key={index} className="cart-item p-4 m-4 rounded shadow">
          <h1>{item.title}</h1>
          <h1>${item.price}</h1>
        </div>
      ))}
  
      <ToastContainer />
  
      <button
        onClick={() => {
          handleDeleteCart();
          emptyCart();
        }}
        type="button"
        class="w-[90%] ms-[5%] mb-10 mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md"
      >
        Empty Cart
      </button>
    </div>
  );  
}

export default Cart;
