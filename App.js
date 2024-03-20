import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, } from 'react'
function App() {
  const[res1,setres1]=useState({})
  const [Number,SetNumber]=useState([]);
let random=function(){
  axios.get("http://20.244.56.144/numbers/rand").then((res)=>SetNumber(res.data))
}
let even=function(){
  axios.get("http://20.244.56.144/numbers/e").then((res)=>SetNumber(res.data))
}
let Prime=function(){
  axios.get("http://20.244.56.144/numbers/p").then((res)=>SetNumber(res.data))
}
let Fibo=function(){
  axios.get("http://20.244.56.144/numbers/f").then((res)=>SetNumber(res.data))
}
console.log(Number)
JSON.stringify(Number)
  return (
    <div >
      <div className='container'>
        <div className='row'>
          <button onClick={random}>Random</button>
          <button onClick={even}>Even</button>
          <button onClick={Prime}>Prime</button>
          <button onClick={Fibo}>Prime</button>
        </div>
        <div className='col'>
          <ul>
           
          </ul>
        </div>
          
      </div>
    </div>
  );
}

export default App;
