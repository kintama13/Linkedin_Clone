import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSearch = createAsyncThunk("searchs/getSearchs", async (jobTitle) => {
    const res = await axios.get(`https://639b216231877e43d6835f40.mockapi.io/linkedin/jobs`, {
        params: {
            jobTitle: `${jobTitle}`,
        }
    }).then((res) => {
        return res.data;
    });
    return res
});

export const searchSlice = createSlice({
    name: 'searchs',
    initialState: {
        searchs: [],
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [getSearch.pending]: (state) => {
            state.loading = true;
        },
        [getSearch.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.searchs = payload;
        },
        [getSearch.rejected]: (state) => {
            state.loading = false;
        },
    }
});

export const searchReducer = searchSlice.reducer;