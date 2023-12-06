import React, { createRef, useEffect } from 'react'
import Problem from './Problem';
import Contest from './Contest';
import Ring from './Ring';


function Contents(props) {
  const contentsRef = createRef();
  useEffect(()=>{
        if(props.show_sidebare){
          contentsRef.current.classList.add('disable-pointer')
        }else{
          contentsRef.current.classList.remove('disable-pointer')
        }
  },[props.show_sidebare])
  return (
    <div className='main bg-slate-700 p-2' ref={contentsRef}>
      {
        props.loading?<Ring />:
        props.flag?
        props.problems.map(problem => <Problem key={problem.contest_id+'@'+problem.index} problem={problem}/>):
        props.contests.filter(contest => contest.phase === "BEFORE").reverse().map(contest => <Contest key={contest.id} contest={contest}/>)
      }
    </div>
  )
}

export default Contents