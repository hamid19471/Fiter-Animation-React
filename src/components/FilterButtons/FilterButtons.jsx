import React, { useContext, useState } from "react";
import { moviesContext } from "../../App";
import { filters } from "../FilterItems/FitlterItems";

import "./FilterButtond.style.css";

const FilterButtons = () => {
    const [active, setActive] = useState(0);
    const { state, setFilter } = useContext(moviesContext);

    const handleActiveButton = (id) => {
        setActive(id);
        const filterMovies = state.filter((item) =>
            item.genre_ids.includes(id),
        );
        if (id === 0) {
            setFilter(state);
        } else {
            setFilter(filterMovies);
        }
    };

    return (
        <div className="container">
            <div className="filter-button">
                {filters.map((item) => (
                    <button
                        className={active === item.id ? "active" : ""}
                        key={item.id}
                        onClick={() => handleActiveButton(item.id)}
                    >
                        {" "}
                        {item.name}{" "}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterButtons;
