// src/components/templatePeoplePage.js

import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

const root = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 1.5,
  margin: 0,
};

const chip = { margin: 0.5 };

const PersonDetails = ({ person }) => {
  return (
    <Paper sx={{ padding: '20px', margin: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
            alt={person.name}
            style={{ width: '100%', borderRadius: '8px', objectFit: 'contain' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant="h4" component="h2" gutterBottom>
            {person.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {person.biography}
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            Known For
          </Typography>
          <Grid container spacing={1}>
            {person.known_for_department && (
              <Grid item>
                <Chip label={person.known_for_department} color="primary" />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PersonDetails;
