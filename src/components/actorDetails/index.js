import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import BirthdayIcon from "@material-ui/icons/Cake";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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

const ActorDetails = ( {actor}) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" component="h3">
        Actor Profile
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>
      <div className={classes.chipRoot}>
      <Paper component="ul" className={classes.chipSet}>
        <li>
          <Chip label="Birthplace" className={classes.chipLabel} color="primary" />
        </li>
          <li>
            <Chip label={actor.place_of_birth} className={classes.chip} />
          </li>
      <li>
          <Chip label="Birthday" className={classes.chipLabel} color="primary" />
        </li>
        <li>
        <Chip icon={<BirthdayIcon />} label={`${actor.birthday}`} />
        </li>
      <li>
          <Chip label="Rating" className={classes.chipLabel} color="primary" />
        </li>
        <li>
        <Chip
          icon={<StarRate />}
          label={`${actor.popularity}`}
        />
        </li>
      </Paper>
      </div>
    </>
  );
};
export default  ActorDetails ;