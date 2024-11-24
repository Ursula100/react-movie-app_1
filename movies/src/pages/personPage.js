import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PersonDetails from "../components/templatePeoplePage";
import { getPersonBio } from "../api/tmdb-api";

const PersonPage = () => {
  const { id } = useParams();
  
  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id }],
    getPersonBio
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return <PersonDetails person={person} />;
};

export default PersonPage;