import React from 'react'
import items from "../data/data_list"
import ItemList from './ItemList'
function List(props) {
  return (
    <div className='sidebar_list' sendtags={'props.sendtags'}>
        {
            items.map((item,index) => <ItemList key={index} item={item} sendtags={props.sendtags}/>)
        }
    </div>
  )
}

export default List