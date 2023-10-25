import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../slices/productSlice';
import basketReducer from '../slices/basketSlice';
import overReducer from '../slices/OverSlice';
import userReducer from '../slices/userSlice';


export const store = configureStore({
    reducer:{
        product : productReducer,
        basket : basketReducer,
        overview : overReducer,
        user : userReducer,
    }
})