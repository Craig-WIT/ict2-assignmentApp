import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import CastList from "../castList";
import Drawer from "@material-ui/core/Drawer";
import FilterCard from "../filterCastCard";

const useStyles = makeStyles((theme) =>  ({
  root: {
    backgroundColor: "#bfbfbf",
    paddingTop: theme.spacing(7),
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function CastListPageTemplate({ cast, title }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  //const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  //const genreId = Number(genreFilter);

  let displayedCast = cast
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });
    //.filter((m) => {
      //return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    //});

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value)};
    //else setGenreFilter(value);
  //};

  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
          <CastList cast={displayedCast} />
      </Grid>
    </Grid>
    <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          nameFilter={nameFilter}
          //genreFilter={genreFilter}
        />
      </Drawer>
    </>    
  );
}
export default CastListPageTemplate;