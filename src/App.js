
import './App.css';
import Alert from './Components/Alert';
import Nav from './Components/Nav';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TextEditor from './Components/TextEditor';

function App() {
  const [Mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)
 
 
 
  const ShowAlert=(message,type)=>{
    setalert({
      msg:message,
      typ:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }

  const toggle=()=>{
    if(Mode==='dark'){
      setMode('ligth');
      document.body.style.backgroundColor='white';
      ShowAlert('light mode activated','success');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#315c78';              
      ShowAlert('dark mode activated','success');
    }
  }

  return (
    <div className="App">
      {/* <h2>hii</h2> */}
      <Nav Mode={Mode} toggle={toggle}/>
      <Alert alert={alert}/>
      <TextEditor Mode={Mode} ShowAlert={ShowAlert}/>
    </div>
  );
}

export default App;
