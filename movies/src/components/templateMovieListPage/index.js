import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";

function MovieListPageTemplate({ movies, title, action }) {

  
  // Use the MUI theme and breakpoints to determine screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));  // Define mobile screen size

  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [sortFilter, setSortFilter] = useState("title");
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1)
    .filter((m) => genreId > 0 ? m.genre_ids.includes(genreId) : true);

  if (sortFilter === "title") {
    displayedMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortFilter === "release_date") {
    displayedMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
  } else if (sortFilter === "rating") {
    displayedMovies.sort((a, b) => b.vote_average - a.vote_average);
  }

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value);
    else if (type === "sort") setSortFilter(value);
  };

  return (
    <Grid container>
      <Grid size={12} sx={{
          position: "sticky", 
          top: "64px", // Offset from the top for sticky
          zIndex: 1000,
        }}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{ flex: "1 1 500px" }}>
        <Grid key="find" size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} sx={{ padding: "20px" }}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            sortFilter={sortFilter}
            onSortChange={(value) => handleChange("sort", value)}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies} />
      </Grid>
    </Grid>
  );
}

export default MovieListPageTemplate;