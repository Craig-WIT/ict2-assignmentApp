import React from "react";
import PageTemplate from "../components/templateTVListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTVShows} from '../api/tmdb-api'

const PopularTVPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('popularTV', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const TVShows = data.results;

  return (
    <PageTemplate
      title="Discover Popular TV Shows"
      TVShows={TVShows}
    />
);
};

export default PopularTVPage;