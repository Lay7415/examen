import { configureStore } from "@reduxjs/toolkit"
import FormReducer from "./FormReducer"
const store = configureStore({
    reducer: {
        listTodo:FormReducer.reducer
    }
})
export default store
