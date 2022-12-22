import React from 'react'
import { NavLink } from "react-router-dom"
import { useGlobalContext } from './context'

export const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <section className='movie-page'>
      <div className='container grid grid-4-col'>{movie.map((currentMovie) => {
        const { imdbID, Title, Poster } = currentMovie;
        return (
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
          <div className='card'>
            <div className='card-info'>
              <h2>{Title}</h2>
              <img src={Poster} alt="imbdID"/>
            </div>
          </div>
        </NavLink>
        );
      })}</div>
    </section>
  )
}
