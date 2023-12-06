import React from 'react'

function SidebarButton(props) {
  return (
    <button className="flex flex-col space-between p-2 gap-1" onClick={props.handle}>
          <p className="p-0.5 bg-slate-400 w-6 rounded-md"></p>
          <p className="p-0.5 bg-slate-400 w-6 rounded-md"></p>
          <p className="p-0.5 bg-slate-400 w-6 rounded-md"></p>
        </button>
  )
}

export default SidebarButton