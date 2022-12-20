import React from 'react'
import { useParams } from 'react-router-dom';

export const SingleMovie = () => {

    const {id} = useParams();

  return (
    <div> Our Single Movie {id} </div>
  )
}
