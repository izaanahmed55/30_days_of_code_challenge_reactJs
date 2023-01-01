import React, { useEffect } from 'react'
import { useState } from 'react';

export const Popular = () => {

    const [popular, setPopular] = useState([]);

    const getPopular = async () => {
        
       const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`);
       const data = await api.json();
       setPopular(data.recipes)
    }

    useEffect(() => {
        getPopular();
    }, []);

  return (
    <>
        {popular.map((recipes) => {
            return(
                <div key={recipes.id}>
                    <p>{recipes.title}</p>
                </div>
            );
        })}
    </>
  )
}
