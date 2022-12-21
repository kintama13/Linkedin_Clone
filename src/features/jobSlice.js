import { createAsyncThunk, createSlice } from  "@reduxjs/toolkit";
import axios from "axios";

export const recJobs = createAsyncThunk("recomend/getRecomend", async () => {
    const res = await axios.get(`https://639b216231877e43d6835f40.mockapi.io/linkedin/recomendatinJobs`)
    .then((res) => {
        return res.data;
    });
    return res;
});

export const recJobSlice = createSlice({
    name: "recomend",
    initialState: {
        recomend: [],
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [recJobs.pending]: (state) => {
            state.loading = true;
        },
        [recJobs.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.recomend = payload;
        },
        [recJobs.rejected]: (state) => {
            state.loading = false;
        },
    }
});

export const recJobsRedux = recJobSlice.reducer;