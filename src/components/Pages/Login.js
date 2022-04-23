import React, { useEffect } from "react";
import styled from "styled-components";

import netflix from "assets/netflix.png";
import hero from "assets/hero.jpg";
import Footer from "components/sections/Footer";
import { Link } from "react-router-dom";
const Login = () => {
  useEffect(() => {
    document.title = "Netflix | Login";
  }, []);
  return (
    <Wrapper>
      <SectionWrapper>
        <Navigation>
          <Link to="/">
            <NavLogo>
              <Logo src={netflix} />
            </NavLogo>
          </Link>
        </Navigation>
        <HeroWrapper>
          <HeroContent>
            <Title>Sign In</Title>
            <InputWrap>
              <Mail
                type="text"
                required=""
                placeholder="Email or Phone Number"
              />
              <Mail tpe="password" required="" placeholder="Password" />
            </InputWrap>
            <InputWrap>
              <Sub type="submit">Sign in</Sub>

              <HelpWrap>
                <Check>
                  <Box type="checkbox" name="check" id="check" />
                  <Label for="check">Remember me</Label>
                </Check>

                <Help>Need Help?</Help>
              </HelpWrap>
            </InputWrap>

            <UserNote>
              <New>
                New to Netflix? <Sign> Sign up now.</Sign>
              </New>
              <Wrap>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. Learn more.
              </Wrap>
            </UserNote>
          </HeroContent>
        </HeroWrapper>
      </SectionWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section``;
const SectionWrapper = styled.div`
  background: url(${hero});
  height: 100vh;
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
  @media only screen and (max-width: 520px) {
    background: #0000;
    height: unset;
    border-bottom: 2px solid #757575;
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

const HeroWrapper = styled.div`
  padding: 80px 20px 0px;
  @media only screen and (max-width: 568px) {
    padding: unset;
  }
`;
const HeroContent = styled.div`
  width: 100%;

  max-width: 480px;
  margin: 0 auto;
  padding: 50px 50px 150px;
  z-index: 9999;
  position: relative;
  margin: auto;
  width: 100%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
  max-height: 660px;
`;
const Title = styled.h2`
  font-size: 2rem;
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

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 0;
`;
const Mail = styled.input`
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 16px 20px;
  background: #333;
  margin: 10px 0;
  font-size: 16px;
  :active,
  :focus {
    outline: none;
    border: none;
  }
`;

const Sub = styled.button`
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 12px;
  font-size: 16px;
  background: red;
  color: #fff;
  padding: 20px 0;
  outline: none;
  border: none;
  box-shadow: none;
  cursor: pointer;
`;

const HelpWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  color: #b3b3b3;
  font-size: 13px;
`;
const Check = styled.div`
  display: flex;
  align-items: center;
`;
const Box = styled.input``;
const Label = styled.label`
  margin-left: 5px;
`;
const Help = styled.a`
  cursor: pointer;
`;

const UserNote = styled.div`
  margin-top: 30px;
`;
const New = styled.span`
  font-size: 13px;
  color: #8c8c8c;
`;
const Sign = styled.a`
  font-size: 13px;
  color: #fff;
  cursor: pointer;
`;
const Wrap = styled.p`
  margin-top: 11px;
  font-size: 13px;
  color: #8c8c8c;
`;
