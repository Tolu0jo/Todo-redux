import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState = 
{
todos:[
    {id:nanoid(), name:"wake up"},
    {id:nanoid(),name:"wake coffee"},
    {id:nanoid(),name:"play tennis"},
      ],
    toggleForm:true,
    updateTodo:{}
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos=[...state.todos,action.payload];
        }
    ,
    clearTodo:(state)=>{
    state.todos=[]
    }
}
})


export const {addTodo,clearTodo} =todoSlice.actions
export default todoSlice.reducer; 