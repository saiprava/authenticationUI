import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Pages/Auth/AuthSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
