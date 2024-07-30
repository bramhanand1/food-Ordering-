import { createSlice } from "@reduxjs/toolkit"

const cartslice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers :{
          additem: (state,action)=>{
            state.items.push(action.payload);
          },
          clearcart:(state,action)=>{
            state.items.length=0;
          },
    },
});
export const{additem,clearcart} = cartslice.actions;
export default cartslice.reducer;