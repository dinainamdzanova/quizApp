import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";

const store = configureStore({
    reducer: quizSlice.reducer
})

export default store;