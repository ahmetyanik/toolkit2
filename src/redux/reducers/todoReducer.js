import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:["ekmek al","okula git"]
}


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addToDo:(state,{payload})=>{
            state.value = [...state.value,payload]
        },
        deleteToDo:(state,{payload})=>{
            state.value=state.value.filter((todo)=>todo !==payload)
        },
        updateToDo:(state,{payload})=>{
            state.value.splice(payload.index,1,payload.updateValue);
            
        }
    }
})

export const {addToDo,deleteToDo,updateToDo} = todoSlice.actions;
export default todoSlice.reducer;
