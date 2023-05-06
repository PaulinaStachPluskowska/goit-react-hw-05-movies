import React, { useEffect, useState } from "react";
import { fetchMovieCast } from "components/API/API";
import css from './Cast.module.css';
import { useParams } from "react-router-dom";

const Cast = () => {
    const { movieId } = useParams();
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200';

    const [cast, setCast] = useState(
        [
            {
                name: '',
                character: '',
                id: '',
                profile_path: null,
            },
        ]
    );
    
    const getCast = async () => {
        const movieCast = await fetchMovieCast(movieId);
        setCast(movieCast);
    };

    useEffect(() => {
        getCast();
    });

    
    return (
        <div>
            <ul className={css.ActorsList}>
                {cast.map( actor => (
                    <li className={css.Actor} key={actor.id}>
                        <img className={css.ActorPhoto} src={actor.profile_path ? `${IMAGE_BASE_URL}/${actor.profile_path}`
                         : 'http://tinleychamber.org/wp-content/uploads/2019/01/no-image-available.png' }
                         alt='actor'
                         />
                         <p className={css.ActorName}>{actor.name}</p>
                         <p>Character: {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cast;