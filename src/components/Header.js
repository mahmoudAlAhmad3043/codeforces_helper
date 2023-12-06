import React, { createRef, useEffect, useState } from 'react'
import Search from './Search'
import Profile from './Profile'

function Header(props) {
  const headerRef = createRef();
  const [showFilter,setShowFilter] = useState(false);
  const search = (values) =>{
    props.search(values)
  }
  useEffect(()=>{
    if(!props.resetFilter)
        setShowFilter(false);
  },[props.resetFilter])

  useEffect(()=>{
        if(props.show_sidebare){
          headerRef.current.classList.add('disable-pointer')
        }else{
          headerRef.current.classList.remove('disable-pointer')
        }
        props.sendShowFilter(showFilter)
  },[props.show_sidebare,showFilter])
  return (
      <header className='header bg-slate-800' ref={headerRef}>
          <Search search={search}/>
          <button className='bg-slate-900 text-slate-400 py-3 px-6 mr-2 hover:bg-slate-950 rounded-3xl' onClick={()=>setShowFilter(!showFilter)}>Filter</button>
          <Profile />
      </header>
  )
}

export default Header


