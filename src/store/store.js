import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/userSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export default store;