import React from "react";
import TVHeader from "../components/headerTVShow";
import SampleTVShow from "./sampleTVData";
import { MemoryRouter } from "react-router";
// import { action } from "@storybook/addon-actions";

export default {
  title: "TV Shows/TVHeader",
  component: TVHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TVHeader TVShow={SampleTVShow} />;

Basic.storyName = "Default";
