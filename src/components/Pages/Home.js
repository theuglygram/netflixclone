import Faq from "components/sections/Faq";
import FavShowSection from "components/sections/FavShowSection";
import Footer from "components/sections/Footer";
import Herosection from "components/sections/Herosection";
import KidSection from "components/sections/KidSection";
import TvHerosection from "components/sections/TvHerosection";
import WatchEverywhere from "components/sections/WatchEverywhere";
import React from "react";

const Home = () => {
  return (
    <>
      <Herosection />
      <TvHerosection />
      <FavShowSection />
      <WatchEverywhere />
      <KidSection />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
