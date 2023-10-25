import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "user",
    initialState : {
        name : "",
        email : "",
        password : ""
    },
    reducers : {
        nameChange : (state , action) =>{
            state.name = action.payload;
        },
        emailChange : (state , action) =>{
            state.email = action.payload;
        },
        passChange : (state , action) =>{
            state.password = action.payload;
        }
    }
})

export const {nameChange , emailChange , passChange} = userSlice.actions;
export default userSlice.reducer;