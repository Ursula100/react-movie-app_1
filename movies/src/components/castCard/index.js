import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";

export default function CastCard({cast}) {
    return (
        <Card>
        <CardMedia
            sx={{ height: 500 }}
            image={
            cast.profile_path
                ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                : img
            }
        />
        <CardContent>
            <Grid container>
            <Grid size={{xs: 12}}>
                <Typography variant="h6" component="p">
                {cast.name}
                </Typography>
            </Grid>
            <Grid size={{xs: 12}}>
                <Typography variant="h6" component="p">
                {cast.character}
                </Typography>
            </Grid>
            <Grid size={{xs: 12}}>
                <Link to={`/`}>
                <Button variant="outlined" size="medium" color="primary">
                    More Info ...
                </Button>
        </Link>
            </Grid>
            </Grid>
        </CardContent>
        </Card>
    );
}