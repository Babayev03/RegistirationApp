import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';

interface LoginState {
  token: string;
  code: string;
  email: string;
  userId: string;
}

const initialState: LoginState = {
  token: '',
  code: '',
  email: '',
  userId: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});
export const loginReducer = loginSlice.reducer;
export const {setToken, setCode, setEmail, setUserId} = loginSlice.actions;
