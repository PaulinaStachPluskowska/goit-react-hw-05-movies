import React, { lazy } from "react";
import { Route, Routes} from "react-router-dom";
import SharedHeader from "./SharedHeader/SharedHeader";
import { Page404 } from "pages/Page404/Page404";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
		<Routes>
			<Route path="/" element={<SharedHeader />}>
				<Route index element={<Home />} />
				<Route path="movies" element={<Movies />} />
				<Route path="movies/:movieId" element={<MovieDetails />}>
					<Route path="cast" element={<Cast />}></Route>
					<Route path="reviews" element={<Reviews />}></Route>
				</Route>
				<Route path="*" element={<Page404 />} />
			</Route>
		</Routes>
	);
};

