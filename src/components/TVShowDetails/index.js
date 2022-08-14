import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NumbersIcon from "@material-ui/icons/ConfirmationNumber";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {  //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const TVShowDetails = ( {TVShow}) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {TVShow.overview}
      </Typography>
      <div className={classes.chipRoot}>
      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Genres" className={classes.chipLabel} color="primary" />
        </li>
        {TVShow.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${TVShow.episode_run_time} min.`} />
        <Chip
          icon={<NumbersIcon />}
          label={`Number of Seasons: ${TVShow.number_of_seasons.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${TVShow.vote_average}`}
        />
        <Chip label={`First aired: ${TVShow.first_air_date}`} />
      </Paper>
      <Paper component="ul" className={classes.chipSet}>
        <li>
        <Link to={`/TVShowSeasons/${TVShow.id}`}>
          <Chip label="View Seasons" className={classes.chipLabel} color="primary" />
        </Link>
        </li>
      </Paper>
      </div>
    </>
  );
};
export default  TVShowDetails ;