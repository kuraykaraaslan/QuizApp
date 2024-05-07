import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Reducers';


const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export default store;