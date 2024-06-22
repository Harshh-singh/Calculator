import { configureStore } from "@reduxjs/toolkit";
import { operationsReducers } from "./reducers/operationsReducer";

export const store = configureStore({
    reducer:{
        operationsReducers,
    },
});