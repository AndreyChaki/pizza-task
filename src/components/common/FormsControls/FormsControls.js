import React from "react";
import s from './FormsControls.module.css'

export const Textarea = ({input, meta: {touched, error}, ...props}) => {

  const hasError = touched && error

  return (
    <div className={s.form_control + ' ' + (hasError && s.error)}>
      <textarea {...input} {...props} />
      {hasError && <div className={s.error_text}>{error}</div>}
    </div>
  )
}

export const Input = ({input, meta: {touched, error}, ...props}) => {

  const hasError = touched && error
  return (
    <div className={s.form_control + ' ' + (hasError && s.error)}>
      <input {...input} {...props} />
      {hasError && <div className={s.error_text}>{error}</div>}
    </div>
  )
}