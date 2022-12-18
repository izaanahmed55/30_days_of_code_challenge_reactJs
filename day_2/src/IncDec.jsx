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
      <center>
          <main className='p-40 justify-center'>
            <div className='p-10'>
              <h2 className='text-white'> {count} </h2>
            </div>
            
            <div className='button'>
              <button className='mx-3' onClick={Increment}> Increment </button>
              <button className='mx-3' onClick={Decrement}> Decrement </button>
            </div>
          </main>
      </center>
    </>
  )
}

