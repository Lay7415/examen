import { createSlice } from "@reduxjs/toolkit";

const FormReducer = createSlice({
    name:'formreducer',
    initialState: {
        data:[]
    },
    reducers:{
        addTodo(state,action) {
            state.data = [action.payload,...state.data]

        },
        DelTodo(state,action) {
            console.log(action.payload)
            state.data = state.data.filter((text) => text.id !== action.payload.id )
        }
    }
})
export const FormReducerActions = FormReducer.actions;
export default FormReducer