import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
const API_URL = `https://imdb-api.com/en/API/Top250Movies/${import.meta.env.API_KEY}`;

const AppProvider = ({ children }) => {
      const [isLoading, setIsLoading] = useState(true);
      const [movie, setMovie] = useState([]);
      const [isError, setIsError] = useState({ show: "false", msg: "" });

      const getMovies = async(url) => {
            try{
                  fetch(url).then(res => res.json()).then((data)=>{
                        console.log(data)
                        setMovie(data.items)
                      })
            } catch(error) {
                  console.log(error)
            }
      };

      // useEffect(() => {
      //       getMovies(API_URL);
      // }, []);

      return (
            <AppContext.Provider value={{ isLoading, isError, movie }}>
                  {" "}
                  {children}{" "}
            </AppContext.Provider>
      );
};

// global custom hook
const useGlobalContext = () => {
      return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
