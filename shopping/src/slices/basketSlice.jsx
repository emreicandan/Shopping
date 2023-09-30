import { createSlice } from "@reduxjs/toolkit";


export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basket: [],
        piece: 0,
        total: 0,
    },
    reducers: {
        addBasket: (state, action) => {
            state.basket.push(action.payload)
        },
        removeItem: (state, action) => {
            const deleteProduct = state.basket.filter(
                (item) => item.id !== action.payload);
            state.basket = deleteProduct
        },
        calculateTotal: (state) => {
            let totalPrice = 0;
            let totalPiece = 0;
            state.basket.forEach((item) => {
                totalPrice += item.price * item.piece
                totalPiece += item.piece
            });
            state.piece = totalPiece,
                state.total = totalPrice
        }
    }
})

export const { addBasket, removeItem, calculateTotal } = basketSlice.actions;
export default basketSlice.reducer;