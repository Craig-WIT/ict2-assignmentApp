import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import AddToQueue from '@material-ui/icons/AddToQueue';
// import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { MoviesContext } from "../../contexts/moviesContext";
import { AvatarGroup } from "@material-ui/lab";
import AddToFavouritesIcon from '../cardIcons/addToFavourites'
import RemoveFromFavouritesIcon from '../cardIcons/removeFromFavourites'
import AddToMustWatchIcon from '../cardIcons/addToMustWatch'
import RemoveFromMustWatchIcon from '../cardIcons/removeFromMustWatch'

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

export default function MovieCard({ movie }) {
  const classes = useStyles();
  const { favourites } = useContext(MoviesContext);
  const { mustWatch } = useContext(MoviesContext);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false
  }

  if (mustWatch.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  } else {
    movie.mustWatch = false
  }

  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      avatar={
        (movie.favourite & movie.mustWatch) ? (
          <AvatarGroup>
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
          <Avatar className={classes.avatar2}>
            <AddToQueue />
          </Avatar>
          </AvatarGroup>
        ) : movie.favourite ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : movie.mustWatch ? (
          <Avatar className={classes.avatar2}>
            <AddToQueue />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h6" component="p">
          {movie.title}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              <Chip label={movie.release_date} className={classes.chipLabel} color="primary" />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              <Chip label={movie.vote_average} className={classes.chipLabel} color="primary" />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        
        {!movie.favourite ? <AddToFavouritesIcon movie={movie}/> : null}
        {movie.favourite ? <RemoveFromFavouritesIcon movie={movie}/> : null}
        {!movie.mustWatch ? <AddToMustWatchIcon movie={movie}/> : null}
        {movie.mustWatch ? <RemoveFromMustWatchIcon movie={movie}/> : null}

        <Link to={`/movies/${movie.id}`}>
          <Button variant="contained" size="small" color="primary">
            Details
          </Button>
        </Link>
        <Link to={`/similarMovies/${movie.id}`}>
          <Button variant="contained" size="small" color="primary">
            View similar
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}