import React, {useContext} from 'react'
// import { AppContext } from './context'
import { useGlobalContext } from './context'

export const Home = () => {
  // const name = useContext(AppContext)
  const name = useGlobalContext();

  return (
    <>
      <div>My Home Page</div>
      <p>{name}</p>
    </>
  )
}
