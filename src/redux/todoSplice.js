import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todos',
    initialState : [
    ],
    reducers : {
        addTodos : (state, action) =>{
            const newState = {
                id : Math.random(),
                task : action.payload.task,
                date : action.payload.date,
                completed : false
            }
            state.push(newState)
        },
        toogleCompleted : (state, action) =>{
            const index = state.findIndex(todo => todo.id === action.payload.id)
            state[index].completed = action.payload.completed  
        },
        deleteTodoItem : (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id)
        }
    }
})

export const {addTodos, toogleCompleted, deleteTodoItem} = todoSlice.actions

export default todoSlice.reducer