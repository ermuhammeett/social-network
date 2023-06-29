import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50=maxLengthCreator(50)
const AddMessageForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required,maxLength50]} name={"newMessageBody"} placeholder={"Enter you message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)