import { useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";



function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/login')
  },[])

  return (
    <div id="app" className="App">
    </div>
  );
}

export default App;

// npm install gh-pages --save-dev