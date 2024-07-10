import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  totalPages: 1,
  tags: "All",
  user: false,
  userIdSelected: 1,
};
const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },

    changeTags: (state, action) => {
      state.tags = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalPages = action.payload;
    },
    setUserIsLogged: (state, action) => {
      state.user = action.payload;
    },

    setUserIdSelected: (state, action) => {
      state.userIdSelected = action.payload;
    },
  },
});

export const { changePage, changeTags, setTotalPage, setUserIsLogged ,setUserIdSelected} =
  pageSlice.actions;
export default pageSlice.reducer;
