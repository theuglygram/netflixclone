import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import tv from "assets/tv.png";
import netflix from "assets/netflix.m4v";
const TvHerosection = () => {
  useEffect(() => {
    document.title = "Netflix | Landing";
  }, []);

  return (
    <Wrapper>
      <HeroWrapper>
        <TextSection>
          <Title>Enjoy on your TV.</Title>
          <Desc>
            {" "}
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </Desc>
        </TextSection>
        <ImgSection>
          <Img src={tv} />

          <Vidfile
            src={netflix}
            type="video/mp4"
            autoPlay={true}
            playing={true}
            volume={1}
            muted={false}
            controls={false}
            loop={true}
          />
        </ImgSection>
      </HeroWrapper>
    </Wrapper>
  );
};

export default TvHerosection;

const Wrapper = styled.div`
  border-bottom: 8px solid #222;
  padding: 0 20px;
`;
const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
  padding: 50px 5%;
  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;
const TextSection = styled.div``;
const ImgSection = styled.div`
  position: relative;
`;
const Title = styled.h2`
  font-size: 2.5rem;
  line-height: 1.5;
  font-weight: 700;
  color: #fff;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 568px) {
    font-size: 1.75rem;
  }
`;
const Desc = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  color: #fff;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 568px) {
    font-size: 1.125rem;
  }
`;
const Img = styled.img`
  position: relative;
  max-width: 400px;
  width: 100%;

  @media only screen and (max-width: 450px) {
    max-width: 250px;
  }
`;
const Vidfile = styled.video`
  position: absolute;
  top: 66px;
  left: 55px;
  z-index: -1;
  width: 316px;
  @media only screen and (max-width: 450px) {
    max-width: 250px;
    position: absolute;
    top: 40px;
    left: 34px;
    z-index: -1;
    width: 200px;
  }
`;
