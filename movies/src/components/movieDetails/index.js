import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationIcon from '@mui/icons-material/MonetizationOn';
import StarRate from '@mui/icons-material/StarRate';
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import { useQuery } from 'react-query';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getSimilarMovies } from '../../api/tmdb-api';
import Spinner from '../spinner';
import SimilarMovieCard from '../similarMovieCard';
import MovieReviews from '../movieReviews';
import { Grid2 } from '@mui/material';

const root = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 1.5,
  margin: 0,
};

const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { data, error, isLoading, isError } = useQuery(
    ['similar_movies', { id: movie.id }],
    getSimilarMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const similarMovies = data.results;

  return (
    <>
      <Typography variant="h5" component="h3" sx={{ marginTop: '14px', fontWeight: 'bold' }}>
        Overview
      </Typography>

      <Typography variant="h6" component="p" sx={{ marginBottom: '20px' }}>
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={{ ...root }}>
        <li>
          <Chip label="Genres" sx={{ ...chip }} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{ ...root }}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} sx={{ ...chip }} />
        <Chip icon={<MonetizationIcon />} label={`${movie.revenue.toLocaleString()}`} sx={{ ...chip }} />
        <Chip icon={<StarRate />} label={`${movie.vote_average} (${movie.vote_count})`} sx={{ ...chip }} />
        <Chip label={`Released: ${movie.release_date}`} sx={{ ...chip }} />
      </Paper>
      <Paper component="ul" sx={{ ...root }}>
        <li>
          <Chip label="Production Countries" sx={{ ...chip }} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em',
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>

      <Typography variant="h5" component="h3" sx={{ marginTop: '20px', fontWeight: 'bold'}} >
        Similar Movies
      </Typography>
      <Carousel showThumbs={false} autoPlay infiniteLoop centerMode centerSlidePercentage={33} showArrows stopOnHover>
        {similarMovies.map((m) => (
          <div key={m.id}>
            <Grid2 sx={{padding: "14px"}}>
              <SimilarMovieCard movie={m} />
            </Grid2>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default MovieDetails;
