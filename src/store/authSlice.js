import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        setNameAndEmail: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
          },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout,setNameAndEmail} = authSlice.actions;

export default authSlice.reducer;