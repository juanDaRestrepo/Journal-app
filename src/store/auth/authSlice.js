import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({

   name: 'auth',
   initialState: {
       status: 'not-authenticated', //not-authenticated, authenticated
       uid: null,
       email: null,
       displayName: null,
       photoURL: null,
       errorMessage: null
    },
    reducers: {
        login: (state, action) => {
            const {uid, email, displayName, photoURL} = action.payload
            state.status = 'authenticated';
            state.uid = uid;
            state.email = email;
            state.displayName = displayName;
            state.photoURL = photoURL;
            state.errorMessage = null
        },
        logout: (state, {payload} ) => {
            state.status = 'not-authenticated'; //not-authenticated, authenticated
            state.uid = null;
            state.email = null;
            state.displayName =null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
            
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;