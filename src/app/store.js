import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import { recJobsRedux } from "../features/jobSlice";
import { searchReducer } from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    recomend: recJobsRedux,
    search: searchReducer,
  },
});
