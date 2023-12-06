import React, { useEffect } from 'react'
import './error.css'

function Error() {

  useEffect(() => {
    document.body.classList.add('ErrorBody');
    return () => {
      document.body.classList.remove('ErrorBody');
    };
  }, []);
  
  return (
    <div className='Error'>Error</div>
  )
}

export default Error