import React from 'react'
import { Search } from '/src/components/Search'
import { Movies } from '/src/components/Movies'
import { NavBar } from './NavBar'

export const Home = () => {
  return (
    <>
      <NavBar/>
      <Search />
      <Movies />
    </>
  )
}
