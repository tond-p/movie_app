import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}){
    return <div class="movies_movie">
        <img src={poster} alt={title} title={title}></img>
        <div class="movie_data"></div>
        <h3 class="movie_title">{title}</h3>
        <h5 class="movie_year">{year}</h5>
        <p class="summary">{summary}</p>
    </div>;
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;