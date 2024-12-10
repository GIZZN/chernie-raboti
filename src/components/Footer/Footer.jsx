import s from "./Footer.module.css";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className={s.footer}>
      <Link to="/tovari" className={s.link}>
        Товары
      </Link>
      <div className={s.phone}>
        <p className={s.phoneText}>Телефон: +7 (999) 999-99-99</p>
      </div>
    </footer>
  );
}