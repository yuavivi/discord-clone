import { createSlice } from '@reduxjs/toolkit';

interface InitialUserState {
    user: null | {
        userId: string;
        userIcon: string;
        userEmail: string;
        displayName: string;
    };
}

const initialState: InitialUserState = {
    user: null,
};

export const userSlice = createSlice({
    name: 'user', 
    initialState, // initialState: initialStateと同じ
    reducers: {
        login: (state, action) => {
        state.user = action.payload; // action.payloadで更新する
        },
        logout: (state) => {
        state.user = null;
        },
    },
    });

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
