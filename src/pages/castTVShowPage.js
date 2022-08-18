import React from "react";
import PageTemplate from "../components/templateCastListPage";
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTVShowCast} from '../api/tmdb-api'
import {getTVShow} from '../api/tmdb-api'

const CastTVShowPage = (props) => {
  const { id } = useParams();
  const {  data, error, isLoading, isError }  = useQuery(["TVShowcast", { id: id }], getTVShowCast)
  const {  data: TVShow}  = useQuery(["TVShow", { id: id }], getTVShow)

  const TVShowName = TVShow.name
  const header = TVShowName + " : TV Show Cast"

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

export default CastTVShowPage;