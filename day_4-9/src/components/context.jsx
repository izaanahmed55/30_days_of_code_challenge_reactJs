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



// Here is your key: 8d8cd1b9

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=8d8cd1b9

// Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=44d0b33c-9476-4c6b-9f7e-77d7c2c6a2b7
// If you did not make this request, please disregard this email.