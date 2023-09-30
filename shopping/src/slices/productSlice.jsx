import { createSlice } from "@reduxjs/toolkit";
import productData from "../app/productData";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        product: productData,
        updatedProduct: []
    },
    reducers: {
        goDetail: (state, action) => {
            state.updatedProduct = state.product.filter((item) => {
                return item.id === action.payload;
            });
        },
        increase: (state, action) => {
            const cartProduct = state.updatedProduct.find(
                (item) => item.id === action.payload)
            cartProduct.piece += 1
        },
        decrease: (state, action) => {
            const cartProduct = state.updatedProduct.find(
                (item) => item.id === action.payload);
            cartProduct.piece -= 1
        },

    }
})

export const { goDetail, increase, decrease } = productSlice.actions;
export default productSlice.reducer;
