import React from 'react'
import '../styles/App.css';
const App = () => {
  let [data, SetData]=UseState("Square")
  let [net, SetNet] = UseState(true)
const createShapeopt=(e)=>{
  SetData(e.target.value)
}

const create=()=>{
  if(data==="Circle"){
  return SetNet(false)
  }
  else{
  return SetNet(true)
}}
  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={createShapeopt} value={data}>
          <option  value="Square">Square</option>
          <option  value="Circle">Circle</option>
        </select>
    <button onCick={create}>Add shape</button>

      </div>
      <div id="shapes-holder">
        <div className={net ? "square" : "circle" }
      </div>
    </div>
  )
}


export default App;
