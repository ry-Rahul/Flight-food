import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./mealsSlice.js";
import pageReducer from "./pageTagSlice.js";
import personMealReducer from "./personSlice.js";

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    page: pageReducer,
    person: personMealReducer,
  },
});

export default store;
