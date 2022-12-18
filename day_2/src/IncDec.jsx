import React, {useState} from 'react'

export const IncDec = () => {

  const [count, setCount] = useState(0)

  const Increment = () => {
      (count >= 0) ? setCount(count+1) : alert("Sorry, Zero is the limit.")
  }

  const Decrement = () => {
      (count>0) ? setCount(count-1) : alert("Sorry, Zero is the limit.")
  }

  return (
    <>
      <main className='items-center justify-center'>
        <div className=''>
          <h3> {count} </h3>
        </div>
        
        <div className='m-5 button'>
          <button onClick={Increment}> Increment </button>
          <button onClick={Decrement}> Decrement </button>
        </div>
      </main>
    </>
  )
}

