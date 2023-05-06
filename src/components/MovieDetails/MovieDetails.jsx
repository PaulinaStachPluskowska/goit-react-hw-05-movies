import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { fetchMovieDetails} from '../API/API';
import Loader from "components/Loader/Loader";
import Notiflix from 'notiflix';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({
        title: '',
        release_date: '',
        vote_average: '',
        overview: '',
        genres: [],
    });
  
    const [imgUrl, setImgUrl] = useState('');
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';


    const getDetails = async () => {
        try {
          let movie = await fetchMovieDetails(movieId);
          setMovie(movie);
          setImgUrl(`${IMAGE_BASE_URL}/${movie.poster_path}`);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDetails();
    });

    const location = useLocation();
    const backHref = location.state?.from ?? '/movies';

    if(!movie) {
        Notiflix.Notify.failure('It is impossible to get detailed data right now!');
        return <Loader />;
    } else {
        return (
            <div className={css.Container}>
                <NavLink to={backHref} className={css.Link}> ← GO BACK</NavLink>

                <div className={css.DetailsContainer}>
                    <img className={css.Poster} src={imgUrl} alt="movie poster" />
                    <div className={css.Info}>
                        <h2 className={css.Title}> {movie.title} ({movie.release_date.slice(0, 4)})</h2>
                        <p className={css.Paragraph}> User score: {Number.parseFloat(movie.vote_average * 10).toFixed(0)}%</p>
                        <h3 className={css.Overview}>Overview</h3>
                        <p className={css.Paragraph}>{movie.overview}</p>
                        <h4 className={css.Genres}>Genres</h4>
                        <p className={css.Paragraph}>{movie.genres.map(genre => genre.name).join(', ')}</p>
                    </div>
                </div>
                <div className={css.AdditionalInfoContainer}>
                    <h4 className={css.AdditionalHeader}>Additional information</h4>
                    <ul className={css.List}>
                        <li className={css.Item}>
                            <Link to="cast" className={css.LinkName} state={{ from: backHref }}>
                                Cast
                            </Link>
                        </li>
                        <li className={css.Item}>
                            <Link to="reviews" className={css.LinkName} state={{ from: backHref }}>
                                Reviews
                            </Link>
                        </li>
                    </ul>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        );
    }
};

export default MovieDetails;