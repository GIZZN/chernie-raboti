import { createSlice } from "@reduxjs/toolkit";

let profileStore = JSON.parse(localStorage.getItem("profiles")) || [];
let isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

let profileSlice = createSlice({
  name: "profile",
  initialState: {
    profiles: profileStore,
    isAuth: isAuth,
    loggedInUser: loggedInUser,
  },
  reducers: {
    login: (state, action) => {
      let user = state.profiles.find(
        (item) =>
          item.email === action.payload.email &&
          item.password === action.payload.password
      );
      if (user) {
        state.isAuth = true;
        state.loggedInUser = user;
        localStorage.setItem("isAuth", JSON.stringify(state.isAuth));
        localStorage.setItem("loggedInUser", JSON.stringify(state.loggedInUser));
      }
    },
    logout: (state) => {
      state.isAuth = false;
      state.loggedInUser = null;
      localStorage.setItem("isAuth", JSON.stringify(state.isAuth));
      localStorage.removeItem("loggedInUser");
    },
    register: (state, action) => {
      let existingUser = state.profiles.find(
        (user) => user.email === action.payload.email
      );
      if (!existingUser) {
        let newUser = { ...action.payload, paidItems: [] };
        state.profiles.push(newUser);
        state.isAuth = true;
        state.loggedInUser = newUser;
        localStorage.setItem("profiles", JSON.stringify(state.profiles));
        localStorage.setItem("isAuth", JSON.stringify(state.isAuth));
        localStorage.setItem("loggedInUser", JSON.stringify(state.loggedInUser));
      }
    },
    addPaidItems: (state, action) => {
      if (state.loggedInUser) {
        let user = state.profiles.find(
          (user) => user.email === state.loggedInUser.email
        );
        if (user) {
          user.paidItems = user.paidItems || [];
          user.paidItems.push(...action.payload);
          localStorage.setItem("profiles", JSON.stringify(state.profiles));
          localStorage.setItem("loggedInUser", JSON.stringify(user));
        }
      }
    },
  },
});

export let { login, logout, register, addPaidItems } = profileSlice.actions;
export default profileSlice.reducer;
