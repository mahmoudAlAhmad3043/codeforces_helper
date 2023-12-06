import React, {  useEffect, useRef, useState } from "react";
import puzzle from "../img/puzzle.ico";
import SidebarButton from "./SidebarButton";
import List from "./List";
function SideBar(props) {
  const styleHideen = ['sidebar','transition-all','duration-400','bg-slate-900','sidebar_hidden'];
  const styleShow = ['sidebar','transition-all','duration-400','bg-slate-900','sidebar_show']
  const [styleSidebar,setStyleSidebar] = useState(styleHideen);
  const [show,setShow] = useState(false)
  const sidebarRef = useRef()
  useEffect(()=>{
    props.sendState(show);
  },[show])
  const handle = () =>{
    if(show){
      setStyleSidebar(styleHideen)
      setShow(false) 
    }else{
      setStyleSidebar(styleShow)
      setShow(true)
    }
  }
  useEffect(()=>{
   document.addEventListener('mousedown',(e)=>{
    if(sidebarRef.current && !sidebarRef.current.contains(e.target) && show){
      handle();
    }
   });
  })
  return (
    <div className={styleSidebar.join(' ')} ref={sidebarRef} sendtags={'props.sendtags'}>
      <div className="sidebar_header  bg-slate-800">
        <div className="logo">
          <img src={puzzle} className="icon_puzzle" alt="No img" />
          <div className="font-bold text-slate-400">CodeforcesHelper</div>
        </div>
        <SidebarButton handle={handle}/>
      </div>
      <List sendtags={props.sendtags}/>
    </div>
  );
}
export default SideBar;
