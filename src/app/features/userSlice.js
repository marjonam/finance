import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
    isAuthReady: (state) => {
      state.isAuth = true;
    },
  },
});

export const { isAuthReady, login, logout } = userSlice.actions;
export default userSlice.reducer;
