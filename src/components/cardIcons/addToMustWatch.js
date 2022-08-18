import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import MustWatchIcon from "@material-ui/icons/PlaylistAdd";

const useStyles = makeStyles({
  favourite: { 
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 10,
    color: "grey"
  },
});

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const classes = useStyles();

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };
  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToMustWatch}>
      <MustWatchIcon className={classes.favourite} fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;