import React, { useState } from "react";
import s from "./Registration.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Profile/profileSlice";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Navigate, useNavigate } from "react-router-dom";

export function Registration() {
  let [formData, setFormData] = useState({ name: "", email: "", password: "" });
  let dispatch = useDispatch();
  let isAuth = useSelector((state) => state.profile.isAuth);
  let navigate = useNavigate();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    setFormData({ name: "", email: "", password: "" });
    if (!isAuth) navigate("/");
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <main className={s.container}>
        <form className={s.form} onSubmit={handleSubmit}>
          <h1 className={s.title}>Регистрация</h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
            className={s.input}
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={s.input}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Пароль"
            className={s.input}
          />
          <button type="submit" className={s.button}>
            Зарегистрироваться
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
