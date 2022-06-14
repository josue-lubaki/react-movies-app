import React, { FormEvent, useRef } from 'react';

import classes from './AddMovie.module.css';
import MovieModel from './MovieModel';

function AddMovie(props: { onAddMovie: (movie: MovieModel) => void }) {
	const titleRef: any = useRef('');
	const openingTextRef: any = useRef('');
	const releaseDateRef: any = useRef('');

	function submitHandler(event: FormEvent) {
		event.preventDefault();

		// could add validation here...

		const movie: MovieModel = {
			title: titleRef.current.value,
			openingText: openingTextRef.current.value,
			releaseDate: releaseDateRef.current.value,
		};

		props.onAddMovie(movie);
	}

	return (
		<form onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor='title'>Title</label>
				<input type='text' id='title' ref={titleRef} />
			</div>
			<div className={classes.control}>
				<label htmlFor='opening-text'>Opening Text</label>
				<textarea rows={5} id='opening-text' ref={openingTextRef}></textarea>
			</div>
			<div className={classes.control}>
				<label htmlFor='date'>Release Date</label>
				<input type='text' id='date' ref={releaseDateRef} />
			</div>
			<button>Add Movie</button>
		</form>
	);
}

export default AddMovie;
