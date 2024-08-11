import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginData: null,
  error: null,
  user: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // Here we write the reducers which does not have async logic
    loginSuccess: (state, action) => {
      state.loginData = action.payload;
    },
  },
});

// async function to make an api call

export const selectUserData = (state) => state.login.user;
export const selectLoginData = (state) => state.login.loginData;
export const { loginSuccess } = loginSlice.actions;

export default loginSlice.reducer;
