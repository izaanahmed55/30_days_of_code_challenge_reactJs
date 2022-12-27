import React, { useContext, useEffect, useState } from "react";
import { Home } from "./Home";

const AppContext = React.createContext();
const API_URL = `https://imdb-api.com/en/API/Top250Movies/${import.meta.env.VITE_API_KEY}`;

const AppProvider = ({ children }) => {
      const [isLoading, setIsLoading] = useState(true);
      const [movie, setMovie] = useState(null);
      const [isError, setIsError] = useState({ show: false, msg: "" });
      const [query, setQuery] = useState("") 
      const [click, setClick] = useState(false)
      const [error, setError] = useState(false)

      const getMovies = async(url, type) => {
            try{
                  fetch(url).then(res => res.json()).then((data)=>{
                        if(data.errorMessage){

                              setIsError({show: true, msg: data.errorMessage});
                              // setError(true)
                              console.log(isError)
                        }
                        console.log(data)
                        type == "search" ? setMovie(data.results) : setMovie(data.items)
                      })
            } catch(error) {
                  setIsError({show: true, msg: data.Error})
            }
      };

      useEffect(() => {
            getMovies(`https://imdb-api.com/en/API/Search/k_bj22zgsx/${query}`, "search");
            // getMovies(`${API_URL}/${query}`);
      }, [click]);
      
      useEffect(() => {
            getMovies(API_URL);
      }, []);

      return (
            <AppContext.Provider value={{ isLoading, isError, movie, setQuery, click, setClick }}>
                  {children}
            </AppContext.Provider>
      );
};

// global custom hook
const useGlobalContext = () => {
      return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
