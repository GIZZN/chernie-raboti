import { createSlice } from "@reduxjs/toolkit";

let CartStore = JSON.parse(localStorage.getItem("cart")) || [];

let cartSlice = createSlice({
  name: "cart",
  initialState: CartStore,
  reducers: {
    addToCart: (state, action) => {
      let item = action.payload;
      let existingItem = state.find((cartItem) => cartItem.text === item.text);

      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.push({ ...item, quantity: 1 }); 
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: () => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export let { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
