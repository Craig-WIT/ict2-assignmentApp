import { Link } from "react-router-dom";
import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
// import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  avatar2: {
    backgroundColor: "rgb(0, 0, 255)",
  },
});

export default function CastCard({ cast }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      title={
        <Typography variant="h5" component="p">
          {cast.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              <Chip label={cast.character} className={classes.chipLabel} color="primary" />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              <Chip label={cast.popularity} className={classes.chipLabel} color="primary" />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/actors/${cast.id}`}>
          <Button variant="contained" size="small" color="primary">
            Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}