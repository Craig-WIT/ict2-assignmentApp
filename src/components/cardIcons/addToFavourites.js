import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles({
  favourite: { 
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 10,
    color: "grey"
  },
});

const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const classes = useStyles();

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon className={classes.favourite} fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;