import React, { useState,useEffect } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import rateColor from '../data/rateColor.js'

function Profile() {
  const [currentColor,setCurrentColor] = useState("text-gray-400")
  useEffect(()=>{
    rateColor.forEach(element => {
      if(element.rank === sessionStorage.getItem('rank')){
        setCurrentColor(element.color);
      }
    });
  })
  const styleDiv = ['profile',currentColor]
  return (
    <div className='profile text-slate-400'>
        <FaUserAlt className={'mr-4 h-8 w-8 '+currentColor}/>
        <div>
        <p className={currentColor}>{sessionStorage.getItem('handle')}</p>
        <p className={currentColor+' text-sm'}>{sessionStorage.getItem('rank').charAt(0).toUpperCase()+sessionStorage.getItem('rank').slice(1)+' ('+sessionStorage.getItem('rating')+')'}</p>
        </div>
    </div>
  )
}

export default Profile