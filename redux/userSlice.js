// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    gameStatus: 'idle',
    gameProgress: 0,
    answeredTrue: 0,
    answeredFalse: 0,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUsername(state, action) {
            state.username = action.payload;
        },
        updateEmail(state, action) {
            state.email = action.payload;
        },
        updateGameStatus(state, action) {
            state.gameStatus = action.payload;
        },
        updateGameProgress(state, action) {
            state.gameProgress = action.payload;
        },
        updateAnsweredTrue(state, action) {
            state.answeredTrue = action.payload;
        },
        updateAnsweredFalse(state, action) {
            state.answeredFalse = action.payload;
        },
    }
});

export const { updateUsername, updateEmail , updateGameStatus, updateGameProgress, updateAnsweredTrue, updateAnsweredFalse } = userSlice.actions;
export default userSlice.reducer;
