import React from 'react'

export const NavBar = () => {
  return (
    <>
    <nav className='flex m-5'>
        <div> 
          <img className='w-48' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Valorant_pink_version_logo.svg/2560px-Valorant_pink_version_logo.svg.png'/>
        </div>
        {/* <div>
          <ul className='text-lg flex list-none'>
            <a className='mx-5' href='/'> <li> Home </li> </a>
            <a href='/'> <li> About </li> </a>
          </ul>
        </div> */}
    </nav>
    </>
  )
}

export default NavBar;