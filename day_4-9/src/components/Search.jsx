import React from "react";
import { useGlobalContext } from "./context";

export const Search = () => {
    const { query, setQuery, click, setClick , isError } = useGlobalContext();

    const handleSearch = () => {
        if (query !== ""){
            setClick(true)
        }  
    }


    return (
        <>
            <section className="search-section">
                <h2 className="font-bold m-3"> Search your Favourite Movie </h2>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <input
                            type="text"
                            placeholder=" Search Here"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </form> 
                <div className="mt-3">
                {query=="" && isError.show ? <span className="text-[red] "> Limit Exceeded </span> : <span></span>}
                {console.log(isError)}
                </div>
                <button onClick={() => handleSearch()} className="mt-2 bg-gray-300 border rounded-xl text-[white]"> 
                Search </button>
                {/* <div className="card-error">
                    <p>{isError.show && isError.msg}</p>
                </div> */}
            </section>
        </>
    );
};
