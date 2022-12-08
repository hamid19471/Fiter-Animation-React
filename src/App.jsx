import React, { createContext, useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import Movies from "./components/Movies/Movies";
import { AnimatePresence } from "framer-motion";

export const moviesContext = createContext();

function App() {
    const [state, setState] = useState([]);
    const [filter, setFilter] = useState([]);

    const fetchMovie = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=f49561560a84d4dad2f6374b405a7636&language=en-US&page=1`,
        );
        const movies = await response.json();
        setState(movies.results);
        setFilter(movies.results);
    };

    useEffect(() => {
        fetchMovie();
    }, []);

    const value = {
        state,
        filter,
        setFilter,
    };
    return (
        <moviesContext.Provider value={value}>
            <div className="app">
                <FilterButtons />
                <div className="image-container">
                    <AnimatePresence>
                        <Movies />
                    </AnimatePresence>
                </div>
            </div>
        </moviesContext.Provider>
    );
}

export default App;
