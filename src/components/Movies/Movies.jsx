import React, { useContext } from "react";
import { moviesContext } from "../../App";
import "./Movies.style.css";
const Movies = () => {
    const { state } = useContext(moviesContext);

    return state.map((item) => (
        <div className="image-card">
            <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.title}
            />
            <h2>{item.title}</h2>
        </div>
    ));
};

export default Movies;
