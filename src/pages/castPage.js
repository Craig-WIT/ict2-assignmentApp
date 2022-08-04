import React from "react";
import PageTemplate from "../components/templateCastListPage";
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getCast} from '../api/tmdb-api'

const CastPage = (props) => {
  const { id } = useParams();
  const {  data, error, isLoading, isError }  = useQuery(["cast", { id: id }], getCast)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const cast = data.cast; 

  return (
    <PageTemplate
      title="Movie Cast"
      cast={cast}
    />
);
};

export default CastPage;