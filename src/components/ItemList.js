import React, {  useState } from 'react'
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'


function ItemList(props) {
  const [open,setOpen] = useState(false);
  let styleTitle = ['title','bg-slate-900','','hover:bg-slate-950','text-slate-400','py-2','px-3','hover:text-slate-100','transition','duration-500'];
  if(props.item.children){
    return (
      <div className='list_item' sendtags={'props.sendtags'}>
        <button className={styleTitle.join(' ')} onClick={() => setOpen(!open)}>
        <p>{props.item.title}</p>
          <div>
            {
                open?<AiFillCaretUp/>:<AiFillCaretDown/>
            }
          </div>
        </button>
         <div className={open?'content open':'content close'} sendtags={'props.sendtags'}>
            {
              props.item.children.map((child,index) => <ItemList key={index} item={child} sendtags={props.sendtags}/>)
            }
         </div>
      </div>
    )
  }else{
    let styleItem = ['hover:text-slate-100','duration-500','transition','text-slate-400','py-2','hover:bg-slate-950']
    return (
       <button className={props.item.icon?styleItem.concat('item').join(' '):styleItem.concat(styleTitle).join(' ')} onClick={()=>{props.sendtags(props.item)}}>
           { props.item.icon?<BsDot className='scale-150'/>:null} {props.item.title}
        </button>
    )
  }
  
}

export default ItemList