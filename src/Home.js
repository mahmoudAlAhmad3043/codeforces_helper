import React, {  useEffect, useRef, useState } from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Contents from './components/Contents'
import './Home.css'
import Filter from './components/Filter'
import server from './data/server.js';

function Home() {
  const filterRef = useRef()
  const [show, setShow] = useState();
  const [resetFilter, setResetFilter] = useState(true);
  const [item, setItem] = useState({});
  const [type,setType] = useState('');
  const [problems,setPorblems] = useState([]);
  const [contests,setContests] = useState([]);
  const [flag,setFlag] = useState(true)
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    document.body.classList.add('HomeBody');
    setLoading(true)
    fetch(server + '/get_sim_problems?handle='+sessionStorage.getItem('handle')+'&type_of_problems=algorithmic_techniques')
        .then(response => response.json())
        .then(data => {
          if(data.status === 'OK'){
            setFlag(true)
            setPorblems(data.result)
            setLoading(false)
          }
        })
        .catch(error => console.log(error))
    return () => {
      document.body.classList.remove('HomeBody');
    };
  }, []);
  const getState = (value) => {
    setShow(value);
  }
  const getTags = (value) => {
    console.log(value);
    setType(value.type);
    setItem(value)
    setLoading(true)
    // get API
    if(value.type === "Similar submissions"){
        fetch(server + '/get_sim_submissions?handle='+sessionStorage.getItem('handle')+'&'+'type_of_problems='+value.value)
        .then(response => response.json())
        .then(data => {
          if(data.status === 'OK'){
            setFlag(true)
            setPorblems(data.result)
            setLoading(false)
          }
        })
        .catch(error => console.log(error))
    }else if(value.type === 'Similar problems'){
      fetch(server + '/get_sim_problems?handle='+sessionStorage.getItem('handle')+'&'+'type_of_problems='+value.value)
        .then(response => response.json())
        .then(data => {
          if(data.status === 'OK'){
            setFlag(true)
            setPorblems(data.result)
            setLoading(false)
          }
        })
        .catch(error => console.log(error))
    }else if(value.type === 'Solved problems'){

        fetch(server + '/get_solved_problems?handle='+sessionStorage.getItem('handle'))
        .then(response => response.json())
        .then(data => {
          if(data.status === 'OK'){
            setFlag(true)
            setPorblems(data.result)
            setLoading(false)
          }
        })
        .catch(error => console.log(error));

    }else if(value.type === 'Un solved problems'){

      fetch(server + '/get_un_solved_problems?handle='+sessionStorage.getItem('handle'))
        .then(response => response.json())
        .then(data => {
          if(data.status === 'OK'){
            setFlag(true)
            setPorblems(data.result)
            setLoading(false)
          }
        })
        .catch(error => console.log(error));

    }else if(value.type === 'Contests'){
      fetch(server + '/get_contests?handle='+sessionStorage.getItem('handle'))
      .then(response => response.json())
      .then(data => {
        if(data.status === 'OK'){
          setFlag(false)
          setContests(data.result)
          setLoading(false)
        }
      })
      .catch(error => console.log(error));
    }
    
  }

  const getResultWithTags = (tags,onSubmitProps) =>{
    console.log(tags);
    setLoading(true)
    // get API
    if(type === 'Similar submissions'){
      fetch(server + '/get_sim_submissions?handle='+sessionStorage.getItem('handle')+'&type_of_problems='+item.value+'&tags_list='+tags.tags.join(',')+'')
      .then(response => response.json())
      .then(data => {
        if(data.status === 'OK'){
          setFlag(true)
          setPorblems(data.result)
          setLoading(false)
          onSubmitProps.setSubmitting(false);
        }
      })
      .catch(error => console.log(error))
    }else if(type === 'Similar problems'){
      fetch(server + '/get_sim_problems?handle='+sessionStorage.getItem('handle')+'&type_of_problems='+item.value+'&tags_list='+tags.tags.join(',')+'')
      .then(response => response.json())
      .then(data => {
        if(data.status === 'OK'){
          setFlag(true)
          setPorblems(data.result)
          setLoading(false)
          onSubmitProps.setSubmitting(false);
        }
      })
      .catch(error => console.log(error))
    }
  }


  const search = (values) =>{
    // get API
    console.log(values);
    setLoading(true)
    fetch(server + '/search_problem_by_name?handle='+sessionStorage.getItem('handle')+'&name='+values.handle)
      .then(response => response.json())
      .then(data => {
        if(data.status === 'OK'){
          setFlag(true)
          setLoading(false)
          setPorblems(data.result)
        }
      })
      .catch(error => console.log(error))
}

  const getShowFilter = (state) => {
    setResetFilter(true);
    if (state) {
      filterRef.current.classList.remove('clos-filter');
      filterRef.current.classList.add('open-filter');
    }
  }



  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target) && resetFilter) {
        filterRef.current.classList.add('clos-filter');
        filterRef.current.classList.remove('open-filter');
        setResetFilter(false)
      }
    });
  })

  return (
    <div className='Home'>
      <Filter item={item} ref={filterRef} sendSelectedTags={getResultWithTags}/>
      <SideBar sendState={getState} sendtags={getTags} />
      <Header show_sidebare={show} sendShowFilter={getShowFilter} resetFilter={resetFilter} search={search}/>
      <Contents show_sidebare={show} problems={problems} contests={contests} flag={flag} loading={loading}/>
    </div>
  )
}

export default Home