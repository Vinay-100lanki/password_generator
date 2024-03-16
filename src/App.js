import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { lc, nc, sc, uc } from './Data/passChar.jsx';

function App() {
  let [uppercase,setUppercase]=useState(false);
  let [lowercase,setLowercase]=useState(false);
  let [symbols,setSymbols]=useState(false);
  let [number,setNumber]=useState(false);
  let [passlen,setPassLen]=useState(8);
  let [fpass,setPass]=useState('');

  let createPassword=()=>{
    let charSet='';
    let finalPass='';
    if(uppercase||lowercase||number||symbols){
      if(uppercase){
        charSet+=uc;
      }
      if(lowercase){
        charSet+=lc;
      }
      if(number){
        charSet+=nc;
      }
      if(symbols){
        charSet+=sc;
      }
      for (let i = 0; i < passlen; i++) {
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))        
      }
      setPass(finalPass);
    }
    else{
      alert("Please select atleast one checkbox........ ")
    }
  };

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass);
  };

  return (
    <div className="passwordBox">
      <h2>Password Generator</h2>
      <div className='passwordbox'>
        <input type='text' value={fpass} readOnly/><button onClick={copyPass}>Copy</button>
      </div>
      <div className='passLength'>
          <label>Password Length</label>
          <input type='number' max={15} min={6} value={passlen} onChange={(event)=>setPassLen(event.target.value)} />
      </div>
      <div className="passUpperCase" >
        <label>Include Upper Letters</label>
        <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
      </div>
      <div className="passLowerCase">
        <label>Include Lower Letters</label>
        <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
      </div>
      <div className="passSpecialCharacter">
        <label>Include Special Characters</label>
        <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)} />
      </div>
      <div className="passNumber">
        <label>Include Numbers</label>
        <input type='checkbox' checked={number} onChange={()=>setNumber(!number)} />
      </div>
        <button className='btn' onClick={createPassword}>Generate Password</button>
    </div>
  );
}

export default App;
 