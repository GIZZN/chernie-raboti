import React from "react";
import { useParams, Link } from "react-router-dom";
import s from "./TovarDetails.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../routes/Cart/cartSlice.js";
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
export function TovarDetails() {
  let { id } = useParams();

  let allItems = useSelector((state) => state.tovari);
  let isAuth = useSelector((state) => state.profile.isAuth);
  let dispatch = useDispatch();

  let tovar = allItems.find((item) => item.id === id);

  if (!tovar) {
    return <p className={s.container}>Товар не найден</p>;
  }

  let handleAddToCart = () => {
    dispatch(addToCart({ id: tovar.id, text: tovar.text, img: tovar.img }));
  };

  return (
    <>
      <Header />
      <div className={s.container}>
        <h1 className={s.title}>{tovar.text}</h1>
        <img className={s.image} src={tovar.img} alt={tovar.text} />
        <p className={s.description}>{tovar.description || "Описание товара отсутствует."}</p>
        {isAuth && (
          <button className={s.addButton} onClick={handleAddToCart}>
            Добавить в корзину
          </button>
        )}
        <Link to="/tovari" className={s.backButton}>
          Вернуться к товарам
        </Link>
      </div>
      <Footer />
    </>

  );
}
