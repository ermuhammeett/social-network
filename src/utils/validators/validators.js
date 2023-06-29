export const required=value=>{
    if(value) return undefined;
    return "Field is required";
}

export const maxLengthCreator=(maxLength)=>(values)=>{
    if(values.length>maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}