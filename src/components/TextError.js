import React from 'react'

function TextError(props) {
  return (
    <div className='text-red-700 font-medium'>
        {props.children}
    </div>
  )
}

export default TextError