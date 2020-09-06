import React from "react";

export const Textarea = ({input, meta: {touched, error}, ...props}) => {

  const hasError = touched && error

  return (
    <div className='form_control'>
      <textarea {...input} {...props} />
      {hasError && <div className='error_text'>{error}</div>}
    </div>
  )
}

export const Input = ({input, meta: {touched, error}, ...props}) => {

  const hasError = touched && error
  return (
    <div className='form_control'>
      <input {...input} {...props} />
      {hasError && <div className='error-text'>{error}</div>}
    </div>
  )
}