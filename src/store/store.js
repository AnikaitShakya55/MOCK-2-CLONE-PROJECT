import {createSlice, configureStore} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState:{isAuthenticated:false,email:null,token:null,},
    reducers:{
        login:(state,action)=>{
            localStorage.setItem('email',action.payload.email);
            localStorage.setItem('token',action.payload.token);
            state.isAuthenticated = true;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },

        logout:(state)=>{
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            state.isAuthenticated = false;
            state.email = null;
            state.token = null;
        }
    }
})

const {login,logout} = authSlice.actions;

const store = configureStore({
    reducer:{
        auth: authSlice.reducer
    }
})

export default store;
