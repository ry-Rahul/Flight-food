import { createSlice } from "@reduxjs/toolkit";


// const initialState = [[], [], [], []];

// data = {
//     id: 1,
//     title: "3 course Chicken",
// }

// initialState[1].push(data);

// data = {
//     id: 2,
//     title: "3 course Chicken 2",
// }

// initialState[1].push(data);

// console.log(initialState)


const initialState = [[], [], [], []];

const personSlice = createSlice({
  name: "person",
  initialState,
    reducers:{
        
        addMeal: (state, action) => {
            const {personId, meal} = action.payload;

            const mealExists = state[personId].find((m) => m.id === meal.id);
            if (!mealExists) {
                state[personId].push(meal);
            }

        },

        removeMeal: (state, action) => {
            const {personId, mealId} = action.payload;
            state[personId] = state[personId].filter((meal) => meal.id !== mealId);
        },
    }
});


export const { addMeal, removeMeal } = personSlice.actions;
 
export default personSlice.reducer;
