import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

import axios from "axios";

const Horror = () => {
  useEffect(() => {
    fetchhorror();
  }, []);
  const [horror, sethorror] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchhorror = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=a406d5071fe2de6507390b94fdf74e94&with_genres=27`
      )
      .then((res) => {
        sethorror(res.data.results);
        setloading(true);
      });
  };

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
      <SliderSection>
        <SecTitle>Horror </SecTitle>
        <>
          {loading && (
            <Slider {...settings}>
              {horror.map((horrorMovie, index) => (
                <SliderContent key={index}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${horrorMovie.backdrop_path}`}
                  />
                  <MovieTitle>{horrorMovie.title}</MovieTitle>
                </SliderContent>
              ))}
            </Slider>
          )}
        </>
      </SliderSection>
    </Wrapper>
  );
};

export default Horror;
const Wrapper = styled.div`
  padding: 76px 0 10px;
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
`;
const Image = styled.img`
  margin: 10px 0;
  max-width: 600px;
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
