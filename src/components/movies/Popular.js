import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import axios from "axios";

const Popular = () => {
  const [popMovies, setpopMovies] = useState([]);
  const [loading, setloading] = useState(false);

  const fecthPopular = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a406d5071fe2de6507390b94fdf74e94`
      )
      .then((res) => {
        setpopMovies(res.data.results);
        setloading(true);
      });
  };

  useEffect(() => {
    fecthPopular();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <MoviesSection>
        <Title>Movies</Title>
        <Description>
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </Description>
      </MoviesSection>
      <SliderSection>
        <SecTitle>Popular on Netflix</SecTitle>
        <>
          {loading && (
            <Slider {...settings}>
              {popMovies.map((popularMovie, index) => (
                <SliderContent key={index}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${popularMovie.backdrop_path}`}
                  />
                  <MovieTitle>{popularMovie.title}</MovieTitle>
                </SliderContent>
              ))}
            </Slider>
          )}
        </>
      </SliderSection>
    </Wrapper>
  );
};

export default Popular;
const Wrapper = styled.div`
  padding: 76px 0 10px;
`;

const MoviesSection = styled.div`
  max-width: 598px;
  padding: 40px 3%;
`;
const Title = styled.h4`
  color: #fff;
  font-size: 2.75rem;
  font-weight: 900;
  line-height: 1.2;
  word-wrap: break-word;
`;
const Description = styled.p`
  color: #fff;
  font-size: 16px;
  margin-top: 0.1vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  width: 100%;
`;

const SliderSection = styled.div`
  padding: 10px 3%;
`;
const SecTitle = styled.p`
  color: #fff;
  font-size: 16px;
`;
const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
`;
const Image = styled.img`
  margin: 10px 0;
  height: 100%;
  width: 100%;
  padding-right: 10px;
  cursor: pointer;
  transition: 0.9s ease all;
  :hover {
    transform: scale(0.9);
  }
  :focus-visible {
    outline: none;
    border: none;
  }
`;
const MovieTitle = styled.h4`
  color: #fff;
  margin: 0 20px;
`;
