import Action from "components/movies/Action";
import Comedy from "components/movies/Comedy";
import Documentary from "components/movies/Documentary";
import Header from "components/movies/Header";
import Horror from "components/movies/Horror";
import Popular from "components/movies/Popular";
import Romance from "components/movies/Romance";
import Footer from "components/sections/Footer";
import React, { useEffect } from "react";

const Movies = () => {
  useEffect(() => {
    document.title = "Movies | Netflix Official Site";
  });
  return (
    <>
      <Header />
      <Popular />
      <Romance />
      <Action />
      <Comedy />
      <Horror />
      <Documentary />
      <Footer />
    </>
  );
};

export default Movies;
