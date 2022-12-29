import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from "./actions/index"

function App() {

  const myState = useSelector((state) => state.changeTheNumber)

  return (
    <>
    <div>
      <h2>Increment/Decrement Counter</h2>
      <h3>Using React & Redux</h3>

      <div>
        {/* <a><span> - </span></a> */}
        <button onClick={() => dispatch(decNumber())}> + </button>
        <input type="text" value={myState}/>
        <button onClick={() => dispatch(incNumber())}> - </button>
        {/* <a><span> + </span></a> */}
      </div>
    </div>
    </>
  )
}

export default App
