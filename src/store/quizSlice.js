import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuiz = createAsyncThunk("quiz/getQuiz", async function() {
    const res = await axios.get("https://restcountries.com/v3.1/all")
    return res.data;
})

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        quizzes: [],
        status: ""
    },
    reducers: {

    },
    extraReducers: {
        [getQuiz.pending]: (state) => {
            state.status = "pending"
        },
        [getQuiz.fulfilled]: (state, action) => {
            state.quizzes = action.payload;
            state.status = "fulfilled"
        },
        [getQuiz.rejected]: (state) => {
            state.status = "ishkal"
        }
    }
})

export default quizSlice;
export const quizActions = quizSlice.actions;