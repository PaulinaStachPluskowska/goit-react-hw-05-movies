import React, { useEffect, useState } from "react";
import { fetchSearchedMovies } from 'components/API/API';
import Searchbar from "components/Searchbar/Searchbar";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import css from './Movies.module.css';
import Loader from "components/Loader/Loader";

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);

	const query = searchParams.get('input');

	const getMovies = async (input) => {
		setIsLoading(true);
		try {
			const searchedMovies = await fetchSearchedMovies(input);
			setMovies([...searchedMovies]);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setMovies([]);
		if (query) {
			getMovies(query);
		}
	}, [query]);

	return (
		<>
			<Searchbar onSubmit={(e) => setSearchParams({ input: e })}></Searchbar>
			{isLoading && <div><Loader /></div>}
			{movies.length > 0 ? (
				<ul className={css.MoviesList}>
					{movies.map((movie) => {
						return (
							<li key={movie.id} className={css.Item}>
								<Link to={`${movie.id}`} state={{ from: `/movies/?${searchParams}` }} className={css.Link}> 
									{movie.name || movie.title}
								</Link>
							</li>
						);
					})}
				</ul>
			) : (
				query && !isLoading && <div><p className={css.Note}>Nothing found. Try again.</p></div>
			)}
		</>
	);
};

export default Movies;