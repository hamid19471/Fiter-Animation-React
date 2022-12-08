import React, { useContext } from "react";
import { moviesContext } from "../../App";
import { motion } from "framer-motion";
import "./Movies.style.css";
const Movies = () => {
    const { filter } = useContext(moviesContext);

    return filter.map((item) => (
        <motion.div
            className="image-card"
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.title}
            />
            <h2>{item.title}</h2>
        </motion.div>
    ));
};

export default Movies;
