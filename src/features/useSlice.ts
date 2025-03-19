import { createSlice } from '@reduxjs/toolkit';

interface InitialUserState {
    user: null | {
        id: string;
        photo: string;
        email: string;
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

export default userSlice.reducer;
