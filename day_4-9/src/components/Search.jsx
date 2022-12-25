import React from "react";
import { useGlobalContext } from "./context";

export const Search = () => {
    const { query, setQuery } = useGlobalContext();

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
                {/* <button className="mt-2 bg-gray-300 border rounded-xl text-[white]"> Search </button> */}
                {/* <div className="card-error">
                    <p>{isError.show && isError.msg}</p>
                </div> */}
            </section>
        </>
    );
};
