import React from "react";
import {Field, reduxForm} from "redux-form";
import {createrField, Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import styles from "../common/FormControls/FormControls.module.css"
const LoginForm=({handleSubmit,error})=>{
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} validate={[required]} name={"email"} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} validate={[required]} type={"password"}  name={"password"} component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} />Remember me
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm=reduxForm({form:"login"})(LoginForm)

const Login=(props)=>{
    const onSubmit=(formData)=>{
        props.login(formData.email, formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps,{login})(Login);