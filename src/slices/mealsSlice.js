
import { createSlice } from '@reduxjs/toolkit';
import data from '../assets/data';

const mealsSlice = createSlice({
  name: 'meals',
  initialState: data,
  reducers: {},
});

export default mealsSlice.reducer;
