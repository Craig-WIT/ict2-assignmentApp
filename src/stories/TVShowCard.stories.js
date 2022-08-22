import React from "react";
import TVCard from "../components/TVCard";
import SampleTVShow from "./sampleTVData";
import { MemoryRouter } from "react-router";

export default {
  title: "TV Shows/TVCard",
  component: TVCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <TVCard
      TVShow={SampleTVShow}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTVShow, poster_path: undefined };
  return (
    <TVCard
      TVShow={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";
