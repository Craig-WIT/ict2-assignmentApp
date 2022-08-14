import React from "react";
import { useParams } from "react-router-dom";
import TVShowDetails from "../components/TVShowDetails";
import PageTemplate from "../components/templateTVShowPage";
import { getTVShow } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TVShowDetailsPage = () => {
  const { id } = useParams();
  const { data: TVShow, error, isLoading, isError } = useQuery(
    ["TVShow", { id: id }],
    getTVShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {TVShow ? (
        <>
          <PageTemplate TVShow={TVShow}>
            <TVShowDetails TVShow={TVShow} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV Show details</p>
      )}
    </>
  );
};

export default TVShowDetailsPage;