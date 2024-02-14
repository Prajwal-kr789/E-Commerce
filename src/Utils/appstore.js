import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import { useReducer } from "react";

const appstore=configureStore({
    reducer : {
        cart : cartReducer,
    },
})
export default appstore
