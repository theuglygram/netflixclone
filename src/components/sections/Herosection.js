import React from "react";
import styled from "styled-components";
import { btn } from "styles/Globalstyle";
import netflix from "assets/netflix.png";
import hero from "assets/hero.jpg";
import { Link } from "react-router-dom";
const Herosection = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <Navigation>
          <Link to="/">
            <NavLogo>
              <Logo src={netflix} />
            </NavLogo>
          </Link>

          <Link to="login">
            <Sign>Sign in</Sign>
          </Link>
        </Navigation>
        <HeroWrapper>
          {" "}
          <HeroContent>
            <Title>Unlimited movies, TV shows, and more.</Title>
            <Desc>Watch anywhere. Cancel anytime.</Desc>
            <Sub>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Sub>
            <Subscription>
              <Input placeholder="Email Address" />
              <Register>Get Started</Register>
            </Subscription>
          </HeroContent>
        </HeroWrapper>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Herosection;

const Wrapper = styled.section``;
const SectionWrapper = styled.div`
  background: url(${hero});
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  width: 100%;
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 120px 100px 250px #000;
  }
`;
const Navigation = styled.nav`
  height: 4rem;
  position: relative;
  margin: 1rem 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  padding: 0 20px;
  @media only screen and (max-width: 568px) {
    margin: 1rem 0.5rem;
  }
`;
const NavLogo = styled.nav``;
const Logo = styled.img`
  max-width: 170px;
  width: 100%;
  @media only screen and (max-width: 568px) {
    max-width: 100px;
  }
`;
const Sign = styled(btn)`
  :hover {
    cursor: pointer;
  }
`;
const HeroWrapper = styled.div`
  border-bottom: 8px solid #222;
  width: 100%;
`;
const HeroContent = styled.div`
  width: 100%;
  padding: 165px 20px;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  z-index: 9999;
  position: relative;
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  @media only screen and (max-width: 768px) {
    padding: 105px 20px;
  }
  @media only screen and (max-width: 568px) {
    padding: 65px 20px;
  }
`;
const Title = styled.h2`
  font-size: 4rem;
  line-height: 1.5;
  font-weight: 700;
  color: #fff;
  max-width: 700px;
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
  margin: 1rem auto;
  @media only screen and (max-width: 568px) {
    font-size: 1.125rem;
  }
`;
const Sub = styled.p`
  padding-bottom: 20px;
  font-size: 19px;
`;
const Subscription = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Input = styled.input`
  height: 60px;
  min-width: 450px;
  width: 100%;
  outline: none;
  border: none;
  padding-left: 15px;
  @media only screen and (max-width: 568px) {
    min-width: 270px;
    height: 50px;
  }
`;
const Register = styled(btn)`
  height: 60px;
  font-size: 30px;
  font-weight: 500;
  width: 100%;
  @media only screen and (max-width: 768px) {
    width: 50%;
    margin: 20px 0;
  }
  @media only screen and (max-width: 568px) {
    width: 150px;
    margin: 20px 0;
    font-size: 18px;
    height: 45px;
  }
`;
