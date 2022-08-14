import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import PopularTVPage from "./pages/popularTVPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import SimilarMoviesPage from './pages/similarMoviesPage';
import SimilarTVShowsPage from './pages/similarTVShowsPage';
import CastPage from './pages/castPage';
import CastTVShowPage from './pages/castTVShowPage';
import ActorDetailsPage from './pages/actorDetailsPage';
import TVShowPage from './pages/TVShowDetailsPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
        <Route path="/actors/:id" element={<ActorDetailsPage/>} />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/favourites" element={<FavouriteMoviesPage/>}
        />
        <Route path="/movies/mustWatch" element={<MustWatchMoviesPage/>}
        />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>}
        />
        <Route path="/tv/popular" element={<PopularTVPage/>}
        />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/TVShows/:id" element={<TVShowPage/>} />
        <Route path="/movieCast/:id" element={<CastPage/>} />
        <Route path="/TVShowCast/:id" element={<CastTVShowPage/>} />
        <Route path="/similarMovies/:id" element={<SimilarMoviesPage/>} />
        <Route path="/similarTVShows/:id" element={<SimilarTVShowsPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </MoviesContextProvider>
        </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));