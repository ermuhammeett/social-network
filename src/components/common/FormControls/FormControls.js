import React from "react";
import styles from "./FormControls.module.css"
import {Field} from "redux-form";

const FormControl=(props)=>{
    const hasError=props.meta.touched && props.meta.error;
    return(
        <div className={styles.formControl+' '+(hasError? styles.error:' ')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{props.meta.error}</span>}
        </div>

    )
}
export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>
}
export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props}/></FormControl>
}




