import { createSlice } from '@reduxjs/toolkit';

export const inputnameSlice = createSlice({
    name: 'inputname',
    initialState: "",
    reducers: {
        setInputName: (state,action)=>{
            const inputName = action.payload;
            return inputName;
        }

    }
})

export const { setInputName } = inputnameSlice.actions;

export default inputnameSlice.reducer;
