import React, { useEffect, useState } from 'react'

function Problem({ problem }) {
    const [stateProblem, setStateProblem] = useState({ state: '', color: '' })
    useEffect(() => {
        if (problem.state === 1) {
            setStateProblem({ state: 'Solved', color: 'text-green-600' })
        } else if (problem.state === 0) {
            setStateProblem({ state: 'Unsolved', color: 'text-red-600' })
        } else {
            setStateProblem({ state: 'New', color: 'text-blue-600' })
        }
    }, [problem.state])
    return (
        <div className='problem bg-slate-900 text-slate-300'>
            <div className={stateProblem.color + ' font-bold text-lg flex justify-between'}>
                {stateProblem.state}
                <a href={'https://codeforces.com/problemset/problem/' + problem.contest_id + '/' + problem.index.toString()} className='text-slate-400 hover:text-slate-200' target='_blank'>{problem.contest_id + problem.index}</a>
            </div>
            <h1><span className='font-bold'>Name:</span> {problem.name_of_problem}</h1>
            <div><span className='font-bold'>Tags:</span> {problem.tags.join(' , ')}</div>
            <div><span className='font-bold '>Rate:</span> <span className='text-blue-500'>{problem.rate_of_problem}</span></div>
        </div>
    )
}

export default Problem