import React from 'react'

function Contest({contest}) {
  function formatTime(seconds) {
    var days = Math.floor(seconds / (3600 * 24));
    var hours = Math.floor((seconds % (3600 * 24)) / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
  if(days !== 0)
    var timeStr = ("0" + days).slice(-2) + ":" + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
  else 
  var timeStr =  ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
    return timeStr;
  }
  return (
    <div className='contest bg-slate-900 text-slate-300'>
    <h1><span className='font-bold'>Name:</span> {contest.name}</h1>
    <div><span className='font-bold'>Length: </span>{formatTime(contest.durationSeconds)}</div>
    <div><span className='font-bold'>Start: </span>{contest.relativeTimeSeconds}</div>
    <a href={'https://codeforces.com/contestRegistration/'+contest.id} target='_blank' className='bg-slate-500 text-slate-300 hover:text-slate-200 font-bold hover:bg-slate-400 text-center rounded-md mt-2 self-end'>Register</a>
    </div>
  )
}

export default Contest