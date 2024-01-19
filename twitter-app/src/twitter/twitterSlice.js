import { createSlice } from "@reduxjs/toolkit";
import { Userinfo } from "../components/Userinfo";

const initialState = Userinfo();

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state, action) => {},
  },
});
