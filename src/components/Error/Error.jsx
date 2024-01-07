import React from 'react'
import classes from './Error.module.css'

function Error({title}) {
  return (
    <div className={classes.error} >
      <h2 className={classes.h1}>{title}</h2>
    </div>
  )
}

export default Error
