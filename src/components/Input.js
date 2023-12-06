import React from 'react'
import {Field , ErrorMessage} from 'formik'
import TextError from './TextError'

function Input(props) {
  const {label , name ,inputStyle,labelStyle,fieldStyle,placeholder, ...rest} = props
  return (
    <div className={inputStyle}>
        <label htmlFor={name} className={labelStyle}>{label}</label>
        <Field id={name} name={name} {...rest} className={fieldStyle} placeholder={placeholder}/>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input