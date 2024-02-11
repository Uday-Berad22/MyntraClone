import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      let tonum = Number(action.payload);
      state.push(tonum - 1);
      return state;
    },
    removeFromBag: (state, action) => {
      let tonum = Number(action.payload);
      tonum = tonum - 1;
      let newState = state;
      const index = newState.indexOf(tonum);
      if (index > -1) {
        // only splice array when item is found
        newState.splice(index, 1); // 2nd parameter means remove one item only
      }
      return newState;
    },
  },
});

export const bagActions = bagSlice.actions;

export default bagSlice;
