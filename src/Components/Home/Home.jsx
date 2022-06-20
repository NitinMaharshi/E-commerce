import React, { useState, useEffect } from "react";
import { Main } from "./Styled-Home";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getProductsLoading,
  getTodoSucces,
} from "../../Redux/action.js";
import "./Home.css";
import { FaShoppingCart, FaStar } from "react-icons/fa";

export default function Home() {
  const [item, setItem] = useState([]);
  const [showdata, setShowData] = useState([]);
  const { loading, todos, cart } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    cart: state.cart,
  }));
  let dispatch = useDispatch();

  const getData = () => {
    dispatch(getProductsLoading());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
        setShowData(json);
        dispatch(getTodoSucces(json));
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getData();
  }, []);

  let { id } = useParams();
  let i;

  for (i = 0; i < item.length; i++) {
    if (item[i].id === id) {
      break;
    }
  }

  const clcHandler = (e) => {
    dispatch(addToCart(e.target.id));
  };

  const handleSort = (key) => {
    let updatedOrder;
    const showdata1 = [...item];
    if (key) {
      updatedOrder = showdata1.sort((a, b) => a.price - b.price);
    } else {
      updatedOrder = showdata1.sort((a, b) => b.price - a.price);
    }
    console.log(updatedOrder);
    setItem([...updatedOrder]);
  };

  const handleFilter = (key) => {
    let updatedOrder;
    updatedOrder = item.filter((itm) => itm.category === key);
    console.log(updatedOrder);
    setItem([...updatedOrder]);
  };
  const handleReset = () => {
    setItem([...showdata]);
  };
  return loading ? (
    <div>Loading....</div>
  ) : (
    <Main>
      <div>
        <button onClick={handleReset}>All</button>
        <button
          onClick={() => {
            handleFilter("men's clothing");
          }}
        >
          men's clothing
        </button>
        <button
          onClick={() => {
            handleFilter("jewelery");
          }}
        >
          jewelery
        </button>
        <button
          onClick={() => {
            handleFilter("electronics");
          }}
        >
          electronics
        </button>
        <button
          onClick={() => {
            handleFilter("women's clothing");
          }}
        >
          women's clothing
        </button>
        <button onClick={() => handleSort(true)}>low to high</button>
        <button onClick={() => handleSort(false)}>high to low</button>
      </div>
      <br />
      <section id="products">
        {item.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt="" className="main-img" />
            <p className="product-name">{product.title}</p>
            <p className="price">
              ${Math.floor(product.price)}
              <span className="discount"></span>
            </p>
            <p className="firstorder">{product.category}</p>
            <p className="rating">
              <span
                style={{
                  backgroundColor:
                    product.rating.rate >= 3.5
                      ? " #23bb75"
                      : "rgb(244, 182, 25) ",
                }}
              >
                {product.rating.rate} <FaStar color="#fff" />
              </span>{" "}
              {product.rating.count} Reviews
            </p>
            <button id={product.id} onClick={clcHandler}>
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </section>
    </Main>
  );
}
