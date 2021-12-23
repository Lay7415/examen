import { useRef } from "react"
import { useDispatch } from "react-redux"
import {FormReducerActions} from '../store/FormReducer'
import classes from"./FormTodo.module.css"
const FormTodo =() => {
    const textRef = useRef()
    const dispatche = useDispatch()
    function FormSubmitHandler(event) {
        event.preventDefault()
        const text = {
            text: textRef.current.value,
            id: Math.random().toString()
        }
        dispatche(FormReducerActions.addTodo(text))
    }
    return <div>
        <form className={classes.form} onSubmit={FormSubmitHandler}>
            <label className={classes.title}>You can write there</label>
            <br></br>
            <div className={classes.container}>
                <input className={classes.input} ref={textRef}/>
                <button className={classes.btn}>send</button>
            </div>
        </form>
    </div>
}
export default FormTodo