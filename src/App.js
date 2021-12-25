import React,{useState,useEffect} from 'react';

import './App.css';


function App() {
  const [input1,setInput1]=useState("");
  const [input2,setInput2]=useState("");
  const [value,setValue]=useState("");
  const [ans,setAns]=useState("");
  const [ampm,setAmpm]=useState("");
 
  
  useEffect(()=>{
      
      setAns(input1+":"+input2+":"+"00"+" "+ampm);

      
      
      
  },[input1,input2,ampm])
  
useEffect(()=>{
  setInterval(()=>{
    const date=new Date();
    setValue(date.toLocaleTimeString());
   
  },1000)
},[])
function play() {
  var audio = new Audio('./song/test.wav');
  audio.play();
}

useEffect(()=>{
    if(value===ans && value!="" ){
    
      
      play();
    }
},[value])

const func=()=>{

  if((input1>0 && input1<=12) && (input2>0&& input2<60) && ampm!==""){
    alert("alerm set successful");
 
  }else{
    alert('invalid alerm')
    
  }
}

  return (
    <div className="main_container">
        <div className="clock"><h1> CLOCK!
        <br />
         <p>{`Time ${value}`}</p>
  
        </h1></div>
        <div className="set_contain">
          
          <input type="text" onChange={(e)=>{
             setInput1(e.target.value);
                 
          }}/>
          <input type="text" onChange={(e)=>{
             setInput2(e.target.value);
             
          }}

          />
          <select id="time" onChange={(e)=>{
              setAmpm(e.target.value);
          }}>
          
  <option value="PM">PM</option>
  <option value="AM">AM</option>
  
</select>
    
   <br />
          <div className="btn">
          <input type="submit"  value="SET" onClick={()=>{
         
            func();
            
           
          }} />

        </div>
        </div>
      
    </div>
        
  );
}

export default App;
