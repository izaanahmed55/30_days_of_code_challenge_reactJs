import React, { useContext, useEffect } from "react";

const AppContext = React.createContext();
const API_URL = `http://www.omdbapi.com/?apikey=8d8cd1b9&s=titanic`

const AppProvider = ({children}) => {
  
  const getMovies = async(url) => {
    try {
      const res = await fetch(url);
      const data = res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getMovies(API_URL);
  }, [])
  
  return <AppContext.Provider> {children} </AppContext.Provider>;
}

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext};