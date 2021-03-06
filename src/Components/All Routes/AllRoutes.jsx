import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Address from "../Address/Address";
import Payment from "../Payment/Payment";
import Summary from "../Summary/Summary";
import Checkout from "../Checkout/Checkout";

export default function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout/cart"
          element={
            <>
              <Checkout />
              <Cart />
            </>
          }
        />
        <Route
          path="/checkout/address"
          element={
            <>
              <Checkout />
              <Address />
            </>
          }
        />
        <Route
          path="/checkout/payment"
          element={
            <>
              <Checkout />
              <Payment />
            </>
          }
        />
        <Route
          path="/checkout/summary"
          element={
            <>
              <Checkout />
              <Summary />
            </>
          }
        />
      </Routes>
    </>
  );
}
