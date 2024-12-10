import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

import screwdriver from "../../assets/screwdriver.png";
import Hammer from "../../assets/Hammer.png";
import bolgarka from "../../assets/bolgarka.png";
import Drill from "../../assets/Drill.png";

import ceMENT from "../../assets/ceMENT.png";
import Kirpichi from "../../assets/Kirpichi.png";
import PaletBlockovRoblox from "../../assets/PaletBlockovRoblox.png";
import pasxalka52 from "../../assets/pasxalka52.png";
import Plitka from "../../assets/Plitka.png";
import PlitkaItalian from "../../assets/PlitkaItalian.png";

let TovariStore = JSON.parse(localStorage.getItem("tovari")) || [];

let TovariSlice = createSlice({
  name: "tovari",
  initialState: TovariStore,
  reducers: {
    add: (state) => {
      let newItems = [
        { id: nanoid(), text: "Отвертка", img: screwdriver, isWholesale: false, description: "Описание..." },
        { id: nanoid(), text: "Молоток", img: Hammer, isWholesale: false, description: "Описание..." },
        { id: nanoid(), text: "Болгарка", img: bolgarka, isWholesale: false, description: "Описание..." },
        { id: nanoid(), text: "Дрель", img: Drill, isWholesale: false, description: "Описание..." },
        { id: nanoid(), text: "Цемент", img: ceMENT, isWholesale: true, description: "Описание..." },
        { id: nanoid(), text: "Кирпичи", img: Kirpichi, isWholesale: true, description: "Описание..." },
        { id: nanoid(), text: "Палет Кирпичей", img: PaletBlockovRoblox, isWholesale: true, description: "Описание..." },
        { id: nanoid(), text: "Цемент 52", img: pasxalka52, isWholesale: true, description: "Описание..." },
        { id: nanoid(), text: "Плитка", img: Plitka, isWholesale: true, description: "Описание..." },
        { id: nanoid(), text: "Плитка Итальянская", img: PlitkaItalian, isWholesale: true, description: "Описание..." },
      ];
      console.log(newItems);
      
      state.push(...newItems);
      localStorage.setItem("tovari", JSON.stringify(state));
    },
  },
});

export let { add } = TovariSlice.actions;
export default TovariSlice.reducer;
