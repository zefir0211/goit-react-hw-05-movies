import {  Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { HeaderAll } from './Header/Header';

const MovieList = lazy(() => import('../pages/MovieList/MovieList'));
const MovieSearch = lazy(() => import('../pages/MovieSearch/MovieSearch'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HeaderAll />}>
        <Route index element={<MovieList />} />
        <Route path="movies" element={<MovieSearch />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
