import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Cart/cartSlice";
import { addPaidItems } from "../Profile/profileSlice";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import s from "./Cart.module.css";

export function Cart() {
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleClearCart = () => {
    dispatch(clearCart());
  };

  let handlePayment = () => {
    if (cart.length > 0) {
      dispatch(addPaidItems(cart));
      dispatch(clearCart());
      navigate("/profile");
    }
  };

  return (
    <div className={s.container}>
      <Header />
      <h1 className={s.title}>Корзина</h1>
      {cart.length === 0 ? (
        <p className={s.empty}>Ваша корзина пуста.</p>
      ) : (
        <>
          <ul className={s.list}>
            {cart.map((item, index) => (
              <li key={index} className={s.item}>
                <img src={item.img} alt={item.text} className={s.image} />
                <div>
                  <p className={s.text}>{item.text}</p>
                  <p className={s.quantity}>Количество: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className={s.clearButton} onClick={handleClearCart}>
            Очистить корзину
          </button>
          <button className={s.payButton} onClick={handlePayment}>
            Оплатить
          </button>
        </>
      )}
      <Footer />
    </div>
  );
}
