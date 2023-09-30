import { createSlice } from "@reduxjs/toolkit";


export const overSlice = createSlice({
    name: 'overview',
    initialState: {
        detail: []
    },
    reducers: {
        addDetail: (state, action) => {
            debugger;
            state.detail.push(action.payload)
        }
    }
})

export const { addDetail } = overSlice.actions;
export default overSlice.reducer