import React from "react";
import PageTemplate from "../components/templateCastListPage";
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getCast} from '../api/tmdb-api'
import {getMovie} from '../api/tmdb-api'

const CastPage = (props) => {
  const { id } = useParams();
  const {  data, error, isLoading, isError }  = useQuery(["cast", { id: id }], getCast)
  const {  data: movie}  = useQuery(["movie", { id: id }], getMovie)

  const movieName = movie.title
  console.log(movieName)
  const header = movieName + " : Movie Cast"

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const cast = data.cast; 

  return (
    <PageTemplate
      title={header}
      cast={cast}
    />
);
};

export default CastPage;