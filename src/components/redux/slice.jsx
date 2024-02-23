import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {
      name: '',
      age: '',
      phone: '',
      imageUrl: '',
    },
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;

    },

    updateUserData: (state, action) => {
      const { name, age, phone} = action.payload;
      
      state.userData.name = name;
      state.userData.age = age;
      state.userData.phone = phone;
      console.log(action.payload)
    },
  },
});

export const { setUserData, updateUserData } = userSlice.actions;
export const selectUserData = (state) => state.user.userData;
export default userSlice.reducer;