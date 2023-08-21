import { createSlice } from "@reduxjs/toolkit";




export const theme = createSlice({
    name: 'themes',
    initialState:{
        themeData:[0] // come back to inatate state

    },
    reducers: {
    console:(state) =>{
        console.log(state)
    }
}
})
// Use this to to add themes later
export const { console } = theme.actions;
export default theme.reducer
