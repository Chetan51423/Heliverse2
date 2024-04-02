import { createSlice } from "@reduxjs/toolkit";

 
 const cartSlice = createSlice({
    name:'team',
    initialState:{
        members:[],
    },
    reducers:{
        addMember:(state, action)=>{
            state.members.push(action.payload);
        },
        removeMember:(state, action)=>{
            state.members=state.members.filter((member)=> member.id !== action.payload);
        },
        clearTeam: (state)=>{
            state.members.length=0;
        }
    }
 });
export const {addMember,removeMember,clearTeam} = cartSlice.actions;
export default cartSlice.reducer;