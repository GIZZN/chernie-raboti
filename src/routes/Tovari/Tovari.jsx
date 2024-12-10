import { useSelector, useDispatch } from "react-redux";
import { add } from "./TovariSlice";
import s from "./Tovari.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Tovar } from "../../components/Tovar/Tovar";

export function Tovari() {
  let dispatch = useDispatch();

  let allItems = useSelector((state) => state.tovari);
  let regularItems = allItems.filter((item) => !item.isWholesale);
  let wholesaleItems = allItems.filter((item) => item.isWholesale);
  console.log(allItems);

  return (
    <>
      <Header />
      <main className={s.main}>
        <h2 className={s.title}>Наши товары</h2>
        <div className={s.items}>
          {regularItems.map((item) => (
            <Tovar
              key={item.id}
              id={item.id}
              text={item.text}
              img={item.img}
            />
          ))}
        </div>

        <h2 className={s.title}>Товары оптом</h2>
        <div className={s.items}>
          {wholesaleItems.map((item) => (
            <Tovar
              key={item.id}
              id={item.id}
              text={item.text}
              img={item.img}
            />
          ))}
        </div>
        {allItems.length === 0 ? (<button onClick={() => dispatch(add())}>Добавить товары</button>) : ''}

      </main>
      <Footer />
    </>
  );
}
