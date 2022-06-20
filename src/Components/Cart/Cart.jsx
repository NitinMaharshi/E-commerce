import React, { useState, useEffect } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../AllProducts";
import { useNavigate } from "react-router-dom";
import { increaseStep, removeFromCart } from "../../Redux/action";

export default function Cart() {
  const [item, setItem] = useState([]);

  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItem(json))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(item);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);
  let res = [];
  console.log(res);
  for (let i = 0; i < allProducts.length; i++) {
    // console.log(cart[i].id);
    if (cart.includes(allProducts[i].id)) {
      let { id, title, category, image, price, rating } = allProducts[i];
      res.push({
        id,
        image,
        title,
        price,
        q: 1,
        rating,
        category,
      });
    }
  }
  let [cartData, setCartData] = React.useState(res);

  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(increaseStep());
    localStorage.setItem(
      "total",
      Math.round(cartData.reduce((acc, cur) => acc + cur.price, 0))
    );
    navigate("/checkout/address");
  };
  return (
    <main id="cart-main">
      <section>
        <h1>Order Summary</h1>
        <h2>
          Cart <span id="cart-line">| </span>
          <span id="total-items">{cartData.length} Items</span>
        </h2>
        {cartData.map((i, index) => (
          <div key={index} id={i.id}>
            <img src={i.image} alt="" />
            <h3>{i.title}</h3>
            <h5>
              <span>${i.price}</span>
            </h5>
            <button
              id={i.id}
              onClick={() => {
                let newData = [...cartData];
                newData.splice(index, 1);
                setCartData(newData);
                dispatch(removeFromCart(i.id));
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </section>
      <section>
        <div id="payment-details">
          <p>PAYMENT DETAILS</p>
          <p>
            Total Amount:
            <span>${cartData.reduce((acc, cur) => acc + cur.price, 0)}</span>
          </p>
          <button onClick={handleClick}>
            PROCEED TO PAY $
            {Math.round(cartData.reduce((acc, cur) => acc + cur.price, 0))}
          </button>
        </div>
      </section>
    </main>
  );
}
