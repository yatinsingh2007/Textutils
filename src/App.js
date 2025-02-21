import './App.css';
import Navbar from "./components/Navbar";
import Textform from './components/Textform';
import React , {useState} from 'react'
function App() {
  const [mode,setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = `black`
    }else{
      setmode('light');
      document.body.style.backgroundColor = `white` 
    }
  }
  return (
  <>
    <Navbar title="Textutils" address="About" mode={mode} toggleMode = {toggleMode}/> 
    <div className="container my-3">
      <Textform purpose = "Enter The Text To Analyze" mode={mode}/>
    </div>
  </>
  );
}
export default App;
