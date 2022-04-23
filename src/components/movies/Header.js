import React from "react";
import styled from "styled-components";
import netflix from "assets/netflix.png";
import net from "assets/net.png";
import { btn } from "styles/Globalstyle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <LogoHolder>
            <Img src={netflix} />
            <Img2 src={net} />
          </LogoHolder>
        </Link>
        <ButtonHolder>
          <RandomText>UNLIMITED TV SHOWS & MOVIES</RandomText>
          <Join>Join Now</Join>
          <Link to="login">
            <SignIn>Sign In</SignIn>
          </Link>
        </ButtonHolder>
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  position: sticky;
  height: 100px;
  width: 100%;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  background-color: #000;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoHolder = styled.div``;
const Img = styled.img`
  max-width: 100px;
  width: 100%;
  cursor: pointer;
  @media only screen and (max-width: 550px) {
    display: none !important;
  }
`;
const Img2 = styled.img`
  max-width: 20px;
  width: 100%;
  cursor: pointer;
  display: none;
  @media only screen and (max-width: 550px) {
    display: block;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
`;
const RandomText = styled.p`
  text-transform: uppercase;
  color: #fff;
  @media only screen and (max-width: 1100px) {
    display: none;
  } ;
`;
const Join = styled(btn)`
  font-size: 13px;
  padding: 9px 12px;
  min-width: 112px;
  margin: 0 10px;
`;
const SignIn = styled(btn)`
  color: #fff;
  font-weight: 400;
  border: 1px solid #888;
  border-radius: 2px;
  font-size: 13px;
  padding: 9px 12px;
  background: transparent;
  min-width: 112px;
  margin: 0 5px;
`;
