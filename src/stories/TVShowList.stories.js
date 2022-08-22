import React from "react";
import TVShowList from "../components/TVList";
import SampleTVShow from "./sampleTVData";
import { MemoryRouter } from "react-router";
// import { action } from "@storybook/addon-actions";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "TV Shows/TVList",
  component: TVShowList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const TVShows = [
    { ...SampleTVShow, id: 1 },
    { ...SampleTVShow, id: 2 },
    { ...SampleTVShow, id: 3 },
    { ...SampleTVShow, id: 4 },
    { ...SampleTVShow, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TVShowList
        TVShows={TVShows}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
