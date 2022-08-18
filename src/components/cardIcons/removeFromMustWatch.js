import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MustWatchIcon from "@material-ui/icons/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
  favourite: { 
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 10,
    color: "blue"
  },
});

const RemoveFromMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const classes = useStyles();

  const handleRemoveFromMustWatch = (e) => {
    e.preventDefault();
    context.removeFromMustWatch(movie);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromMustWatch}
    >
      <MustWatchIcon className={classes.favourite} fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromMustWatchIcon;