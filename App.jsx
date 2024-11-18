import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  style from'./App.module.css'
import Display from './components/display'
import Buttons from './components/buttons'


function App() {
    let [calval,setcalval]=useState('');
    const NoOfUpdates=useRef(0);
    const onbuttonclick=(buttontext)=>{
      NoOfUpdates.current+=1;
      if(buttontext==="c"){
        setcalval("");

      }
      else if(buttontext=== "="){
        const result=eval(calval);
        setcalval(result);
      }
      else{
        const newdisplayvalue=calval+buttontext;
        setcalval(newdisplayvalue);
        console.log("no of updates ",NoOfUpdates.current);
      }
    }

  return (
    <>
      <div className={style.calculator}>
        <Display displayvalue={calval}/>
        <Buttons onbuttonclick={onbuttonclick}/>
      </div>
    </>
  );
    }

export default App;
