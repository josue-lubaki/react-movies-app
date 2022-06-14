import React from 'react';

import Movie from './Movie';
import MovieModel from './MovieModel';
import classes from './MoviesList.module.css';

const MovieList = (props: { movies: MovieModel[] }) => {
	return (
		<ul className={classes['movies-list']}>
			{props.movies.map((movie) => (
				<Movie
					key={movie.id}
					title={movie.title}
					releaseDate={movie.releaseDate}
					openingText={movie.openingText}
				/>
			))}
		</ul>
	);
};

export default MovieList;
