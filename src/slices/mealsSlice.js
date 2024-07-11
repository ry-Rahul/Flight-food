import { createSlice } from '@reduxjs/toolkit';

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {},
  reducers: {
    setDataIntoStore(state, action) {
      return action.payload; // Return new state instead of modifying the existing state
    },
  },
});

export const { setDataIntoStore } = mealsSlice.actions;
export default mealsSlice.reducer;
