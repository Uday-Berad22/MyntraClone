import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      let newState = state;
      newState.fetchDone = true;
      return newState;
    },
    markFetchingStarted: (state) => {
      let newState = state;
      newState.currentlyFetching = true;
      return newState;
    },
    markFetchingFinished: (state) => {
      let newState = state;
      newState.currentlyFetching = false;
      return newState;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
