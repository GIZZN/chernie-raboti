import styles from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../routes/Profile/profileSlice';
import basket from '../../assets/basket.svg'
import avatar from '../../assets/avatar.png';

export function Header() {
  let { isAuth } = useSelector((state) => state.profile);
  let cart = useSelector((state) => state.cart || []);
  let dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to={'/'}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <h2 className={styles.title}>Чёрные работы</h2>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/tovari" className={styles.navLink}>
          Товары
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/cart" className={styles.navLink}>
              <img className={styles.backet} src={basket} alt="" />
              ({cart.reduce((total, item) => total + item.quantity, 0)})
            </NavLink>
            <Link to="/" className={styles.navLink} onClick={() => dispatch(logout())}>
              Выход
            </Link>
            <Link to="/profile">
              <img
                src={avatar}
                alt="avatar"
                className={styles.avatar}
              />
            </Link>
          </>
        ) : (
          <>
            <NavLink to="/login" className={styles.navLink}>
              Вход
            </NavLink>
            <NavLink to="/registration" className={styles.navLink}>
              Регистрация
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
