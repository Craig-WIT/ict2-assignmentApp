import React from "react";
import TVCard from "../TVCard";
import Grid from "@material-ui/core/Grid";

const TVList = ( {TVShows} ) => {
  let TVCards = TVShows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TVCard key={m.id} TVShow={m} />
    </Grid>
  ));
  return TVCards;
};

export default TVList;