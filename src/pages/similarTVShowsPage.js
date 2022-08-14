import React from "react";
import PageTemplate from "../components/templateTVListPage";
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getSimilarTVShows} from '../api/tmdb-api'

const SimilarTVShowsPage = (props) => {
  const { id } = useParams();
  const {  data, error, isLoading, isError }  = useQuery(["similarTVShow", { id: id }], getSimilarTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const TVShows = data.results;

  return (
    <PageTemplate
      title="Similar TV Shows"
      TVShows={TVShows}
    />
);
};

export default SimilarTVShowsPage;