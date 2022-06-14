import React from 'react';

import classes from './Movie.module.css';
import MovieModel from './MovieModel';

const Movie = (props: MovieModel) => {
	return (
		<li className={classes.movie}>
			<h2>{props.title}</h2>
			<h3>{props.releaseDate}</h3>
			<p>{props.openingText}</p>
		</li>
	);
};

export default Movie;
