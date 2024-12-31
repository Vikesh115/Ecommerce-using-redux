import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterdata: [],
}


export const filterSlice = createSlice({
    name:'filterdata',
    initialState,
    reducers:{
        setFilter: (state,action) =>{
            state.filterdata = action.payload
        }
    }
})


export const {setFilter} = filterSlice.actions;

export default filterSlice.reducer;