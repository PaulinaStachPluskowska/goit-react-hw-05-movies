import axios from "axios";

export const API_KEY = '28e7de8a02a020e11a900cecedfaedb8';
export const BASE_URL = 'https://api.themoviedb.org/3';


export const fetchTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    
    return response.data.results;
};

export const fetchSearchedMovies = async input => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`);
    
    return response.data.results;
};

export const fetchMovieDetails = async movieId => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);

    return response.data;
};

export const fetchMovieCast = async movieId => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);

    return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);

    return response.data.results;
};

// const api = {
// 	fetchTrendingMovies,
// 	fetchSearchedMovies,
// 	fetchMovieDetails,
// 	fetchMovieCast,
// 	fetchMovieReviews,
// };

// export default api;




