import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice/todoSlice";

export const store = configureStore({
    reducer: {
        todoSlice
    }
});
