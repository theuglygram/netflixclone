import React, { useEffect } from "react";
import styled from "styled-components";
import kids from "assets/kids.png";
// import netflix from "assets/netflix.m4v";
const KidSection = () => {
  useEffect(() => {
    document.title = "Netflix | Landing";
  }, []);

  return (
    <Wrapper>
      <HeroWrapper>
        <ImgSection>{<Img src={kids} />}</ImgSection>
        <TextSection>
          <Title>Create profiles for kids.</Title>
          <Desc>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </Desc>
        </TextSection>
      </HeroWrapper>
    </Wrapper>
  );
};

export default KidSection;

const Wrapper = styled.div`
  border-bottom: 8px solid #222;
  padding: 0 20px;
  margin-bottom: 20px;
`;
const HeroWrapper = styled.div`
  display: grid;
  grid-template-areas: "image text";
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
  padding: 50px 5%;
  @media only screen and (max-width: 950px) {
    grid-template-areas: "text" "image";
    grid-template-columns: 1fr;
    text-align: center;
  }
`;
const TextSection = styled.div`
  grid-area: text;
`;
const ImgSection = styled.div`
  position: relative;
  grid-area: image;
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
    font-size: 1.35rem;
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
  max-width: 600px;
  width: 100%;

  @media only screen and (max-width: 450px) {
    max-width: 250px;
  }
`;
// const Vidfile = styled.video`
//   position: absolute;
//   top: 66px;
//   left: 55px;
//   z-index: -1;
//   width: 316px;
//   @media only screen and (max-width: 450px) {
//     max-width: 250px;
//     position: absolute;
//     top: 40px;
//     left: 34px;
//     z-index: -1;
//     width: 200px;
//   }
// `;
