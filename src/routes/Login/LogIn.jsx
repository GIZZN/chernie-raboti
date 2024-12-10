import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Profile/profileSlice"
import s from "./LogIn.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Navigate } from "react-router-dom";
export function LogIn() {
  let [credentials, setCredentials] = useState({ email: "", password: "" });
  let dispatch = useDispatch();
  let select = useSelector(state => state.profile)
  let handleChange = (e) => {
    let { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  if(select.isAuth){
    return <Navigate to={'/'}/>
  }

  return (
    <>
      <Header />
      <main className={s.container}>
        <form className={s.form} onSubmit={handleSubmit}>
          <h1 className={s.title}>Вход</h1>
          <input
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            className={s.input}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Пароль"
            className={s.input}
          />
          <button type="submit" className={s.button}>
            Войти
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
