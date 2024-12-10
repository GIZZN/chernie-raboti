import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../routes/Profile/profileSlice";
import cartReducer from "../routes/Cart/cartSlice";
import TovariReducer from '../routes/Tovari/TovariSlice'
export let store = configureStore({
  reducer: {
    profile: profileReducer,
    cart: cartReducer,
    tovari: TovariReducer,
  },
});
