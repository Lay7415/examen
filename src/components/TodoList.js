import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { FormReducerActions } from "../store/FormReducer"
import classes from './TodoList.module.css'
const Todolist =()=> {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.listTodo.data) 
    return<div>
        <ul className={classes.list}>
            {todos.map(li => {
                return <div className={classes.box} key={li.id}>
                        <li >{li.text}</li>
                        <button className={classes.btn} onClick={() => {
                        dispatch(FormReducerActions.DelTodo({id:li.id}))
                        }}>delete</button>
                    </div>
               
            })}
        </ul>
    </div>
}
export default Todolist