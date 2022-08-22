import React from "react";
import TVShowDetails from "../components/TVShowDetails";
import SampleTVShow from "./sampleTVData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "TV Shows/TVDetails",
  component: TVShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <TVShowDetails TVShow={SampleTVShow} />;

Basic.storyName = "Default";
