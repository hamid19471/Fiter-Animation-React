import React from "react";
import { filters } from "../FilterItems/FitlterItems";

import "./FilterButtond.style.css";

const FilterButtons = () => {
    return (
        <div className="container">
            <div className="filter-button">
                {filters.map((item) => (
                    <button key={item.id}> {item.name} </button>
                ))}
            </div>
        </div>
    );
};

export default FilterButtons;
