import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearUserData:(state)=>{
      state.userData=null
    },
  },
});

export const { setUserData, clearUserData} = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;