import * as React from "react";
import {
  Header,
  OverviewContainer,
  OverviewTodayContainer,
} from "./../../Components";

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <OverviewContainer />
      <OverviewTodayContainer />
    </React.Fragment>
  );
};
