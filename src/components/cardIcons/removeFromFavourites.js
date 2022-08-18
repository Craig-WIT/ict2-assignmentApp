import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
  favourite: { 
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 10,
    color: "red"
  },
});

const RemoveFromFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const classes = useStyles();

  const handleRemoveFromFavourites = (e) => {
    e.preventDefault();
    context.removeFromFavourites(movie);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavourites}
    >
      <FavoriteIcon className={classes.favourite} fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavouritesIcon;