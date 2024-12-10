import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Profile/profileSlice";
import s from "./Profile.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import avatar from '../../assets/avatar.png';
import { useNavigate } from "react-router-dom";

export function Profile() {
  let select = useSelector((state) => state.profile);
  let dispatch = useDispatch();
  let nav = useNavigate();

  if (!select.isAuth || !select.loggedInUser) {
    return <h2 className={s.message}>Вы не авторизованы. Пожалуйста, войдите в систему.</h2>;
  }

  let handleLogout = () => {
    dispatch(logout());
    nav('/');
  };

  let paidItems = select.loggedInUser.paidItems || [];

  return (
    <>
      <Header />
      <main className={s.container}>
        <div className={s.profile}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            className={s.avatar}
          />
          <h1 className={s.name}>{select.loggedInUser.name}</h1>
          <p className={s.email}>{select.loggedInUser.email}</p>
          <button className={s.logoutButton} onClick={handleLogout}>
            Выйти
          </button>
        </div>
        <div className={s.orders}>
          <h2>Ваши заказы</h2>
          {paidItems.length === 0 ? (
            <p className={s.empty}>Здесь будет отображаться информация о ваших заказах.</p>
          ) : (
            <ul className={s.list}>
              {paidItems.map((item, index) => (
                <li key={index} className={s.item}>
                  <img src={item.img} alt={item.text} className={s.image} />
                  <div>
                    <p className={s.text}>{item.text}</p>
                    <p className={s.quantity}>Количество: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
