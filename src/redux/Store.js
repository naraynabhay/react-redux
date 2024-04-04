import { configureStore } from "@reduxjs/toolkit";
import{ CartSlice} from "./Slices/CartSlice";

export const store=configureStore({
    reducer:{
       cart:CartSlice.reducer
        // it method for creating store int the  name:value format

    },
});